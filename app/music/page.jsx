import { fetchSanityData } from '@/sanity/lib/fetchData';
import MusicSection from '@/components/shared/MusicSection';
import textStyles from '@/components/styles/globals/text.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export const metadata = {
  title: 'Discography - Temporary Friends',
  description: 'Explore the full discography of Temporary Friends. Listen to all of our releases, EPs, and albums.',
};

export const revalidate = 3600;

const MUSIC_QUERY = `*[_type == "disc"] | order(coalesce(releaseDate, _createdAt) desc) {
    _id,
    title,
    cover,
    "slug": slug.current,
    songs
}`;

export default async function MusicPage() {
    const discography = await fetchSanityData(MUSIC_QUERY);

    return (
        <main className={layoutStyles.container}>
            <h1 className={textStyles.titleText}>Discography</h1>
            <MusicSection discography={discography} />
        </main>
    );
}