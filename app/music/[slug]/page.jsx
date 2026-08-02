import { fetchSanityData } from '@/sanity/lib/fetchData';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import TrackList from './TrackList';
import textStyles from '@/components/styles/globals/text.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';
import styles from '@/components/styles/module/Music.module.css';

export const revalidate = 3600;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const disc = await fetchSanityData(`*[_type == "disc" && slug.current == $slug][0]{ title }`, { slug });
    
    if (!disc) return {};
    
    return {
        title: `${disc.title} - Temporary Friends`,
        description: `Listen to ${disc.title} and read lyrics by Temporary Friends.`,
    };
}

export async function generateStaticParams() {
    const slugs = await fetchSanityData(`*[_type == "disc"]{ "slug": slug.current }`);
    return slugs.filter(disc => disc.slug).map((disc) => ({
        slug: disc.slug,
    }));
}

export default async function DiscPage({ params }) {
    const { slug } = await params;
    const disc = await fetchSanityData(`*[_type == "disc" && slug.current == $slug][0]{
        _id,
        title,
        cover,
        songs
    }`, { slug });

    if (!disc) return null;

    return (
        <main className={layoutStyles.container}>
            <div className={styles.discHeader}>
                <div className={styles.discCoverWrapper}>
                    <Image 
                        className={styles.discCover}
                        src={urlFor(disc.cover).width(600).auto('format').url()} 
                        alt={`${disc.title} Cover`}
                        width={600}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>
                <div className={styles.discInfo}>
                    <h1 className={textStyles.titleText} style={{ margin: 0 }}>
                        {disc.title}
                    </h1>
                </div>
            </div>
            
            <div className={styles.trackListContainer}>
                <h2 className={textStyles.headerText}>Tracklist</h2>
                <TrackList songs={disc.songs || []} />
            </div>
        </main>
    );
}