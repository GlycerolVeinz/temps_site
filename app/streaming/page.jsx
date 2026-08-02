import { fetchSanityData } from '@/sanity/lib/fetchData';
import PlatformsSection from '@/components/shared/PlatformsSection';
import textStyles from '@/components/styles/globals/text.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export const metadata = {
  title: 'Streaming - Temporary Friends',
  description: 'Listen to Temporary Friends on Spotify, Apple Music, YouTube Music, and other streaming platforms.',
};

export const revalidate = 86400; // ISR

const STREAMING_QUERRY = `*[_type == "platform"]{
    _id,
    title,
    hasWrongAssociation,
    url,
    linkText
}`;

export default async function StreamingPage() {
    const platforms = await fetchSanityData(STREAMING_QUERRY);

    return (
        <main className={layoutStyles.container}>
            <h1 className={textStyles.titleText}>Streaming Platforms</h1>
            <p className={textStyles.normalText}>Listen to Temporary Friends on your favorite platform.</p>
            <PlatformsSection links={platforms} />
        </main>
    );
}