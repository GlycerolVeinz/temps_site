import { fetchSanityData } from '@/sanity/lib/fetchData';
import UpcomingShowsSection from '@/components/shared/UpcomingShows';
import textStyles from '@/components/styles/globals/text.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export const metadata = {
  title: 'Shows - Temporary Friends',
  description: 'Find out when and where Temporary Friends are playing next. Get tickets and directions to upcoming shows.',
};

export const dynamic = 'force-dynamic';

const UPCOMING_SHOWS_QUERY = `*[_type == "show" && dateTime >= now()] | order(dateTime asc) {
    _id,
    dateTime,
    eventLink,
    eventName,
    googleMapsLink,
    location,
    ticketLink,
    poster
}`;

const PAST_SHOWS_QUERY = `*[_type == "show" && dateTime < now()] | order(dateTime desc) {
    _id,
    dateTime,
    eventLink,
    eventName,
    googleMapsLink,
    location,
    ticketLink,
    poster
}`;

export default async function ShowsPage() {
    const upcomingShows = await fetchSanityData(UPCOMING_SHOWS_QUERY);
    const pastShows = await fetchSanityData(PAST_SHOWS_QUERY);

    return (
        <main className={layoutStyles.container}>
            <h1 className={textStyles.titleText}>Upcoming Shows</h1>
            <UpcomingShowsSection shows={upcomingShows} />

            {pastShows.length > 0 && (
                <>
                    <h2 className={textStyles.titleText}>Past Shows</h2>
                    <UpcomingShowsSection shows={pastShows} />
                </>
            )}
        </main>
    );
}