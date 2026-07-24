import { fetchSanityData } from '@/sanity/lib/fetchData';
import SectionWrapper from './SectionWrapper';
import { UpcomingShowsSection } from '@/components/clientSections';

const SHOWS_QUERRY = `*[_type == "show"]{
    _id,
    dateTime,
    eventLink,
    eventName,
    googleMapsLink,
    location,
    ticketLink
}`

export default async function Shows() {
    const allShows = await fetchSanityData(SHOWS_QUERRY);
    const shows = allShows
        .filter(show => new Date(show.dateTime) >= new Date())
        .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))

    return (
        <SectionWrapper id="shows" title="Upcoming Shows">
            <UpcomingShowsSection shows={shows} />
        </SectionWrapper>
    )
}