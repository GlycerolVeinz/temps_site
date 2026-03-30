import { client } from '@/sanity/lib/client';
import { UpcomingShowsSection, SectionTitle } from '@/components/clientSections';

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
    const allShows = await client.fetch(SHOWS_QUERRY, {}, { cache: 'no-store' });
    const shows = allShows
        .filter(show => new Date(show.dateTime) >= new Date())
        .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))

    return (
        <div>
            <SectionTitle id="shows" title="Upcoming Shows" />
            <UpcomingShowsSection shows={shows} />
        </div>
    )
}