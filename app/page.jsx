import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchSanityData } from '@/sanity/lib/fetchData';
import { urlFor } from '@/sanity/lib/image';
import { ENV } from '@/components/config';
import ShowCard from '@/components/cards/ShowCard';
import textStyles from '@/components/styles/globals/text.module.css';
import pageStyles from '@/components/styles/module/Page.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';
import showStyles from '@/components/styles/module/Show.module.css';

export const dynamic = 'force-dynamic';

const LATEST_RELEASE_QUERY = `*[_type == "disc"] | order(coalesce(releaseDate, _createdAt) desc)[0] {
    _id,
    title,
    cover,
    "slug": slug.current
}`;

const NEXT_SHOW_QUERY = `*[_type == "show" && dateTime >= now()] | order(dateTime asc)[0] {
    _id,
    dateTime,
    eventLink,
    eventName,
    googleMapsLink,
    location,
    ticketLink,
    poster
}`;

async function LatestRelease() {
    const release = await fetchSanityData(LATEST_RELEASE_QUERY);
    
    if (!release) return null;

    return (
        <section className={pageStyles.latestReleaseSection}>
            <h2 className={textStyles.titleText} style={{ marginBottom: 'var(--space-4)', marginTop: 0 }}>Latest Release</h2>
            <Link href="/streaming" className={pageStyles.latestReleaseCard}>
                <div className={pageStyles.latestReleaseImageWrapper}>
                    <Image 
                        src={urlFor(release.cover).width(600).auto('format').url()} 
                        alt={`${release.title} Cover`}
                        width={600}
                        height={600}
                        className={pageStyles.latestReleaseImage}
                    />
                </div>
                <div className={pageStyles.latestReleaseInfo}>
                    <h3 className={textStyles.headerText}>{release.title}</h3>
                    <p className={textStyles.linkText}>Listen Now</p>
                </div>
            </Link>
        </section>
    );
}

function ShowSkeleton() {
    return (
        <div className={`${showStyles.showCardContainer} ${pageStyles.skeletonCard}`}>
            <div className={pageStyles.skeletonImage} />
            <div className={pageStyles.skeletonTextWrapper}>
                <div className={pageStyles.skeletonText} />
                <div className={pageStyles.skeletonTextSmall} />
            </div>
            <p className={textStyles.normalTextSecondary} style={{textAlign: 'center', marginTop: 'var(--space-4)'}}>
                No shows are currently planned, see you around later.
            </p>
        </div>
    );
}

async function NextShow() {
    const show = await fetchSanityData(NEXT_SHOW_QUERY);

    return (
        <section className={pageStyles.nextShowSection}>
            <h2 className={textStyles.titleText} style={{ marginBottom: 'var(--space-4)', marginTop: 0 }}>Next Show</h2>
            {show ? (
                <ShowCard show={show} />
            ) : (
                <ShowSkeleton />
            )}
            <div style={{ marginTop: 'var(--space-4)', textAlign: 'right' }}>
                <Link href="/shows" className={textStyles.linkText}>View All</Link>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <main className={pageStyles.homeContainer}>
            <section className={pageStyles.heroSection}>
                <div className={pageStyles.backgroundImageWrapper}>
                    <picture>
                        <source media="(orientation: portrait)" srcSet={ENV.BACKGROUND_IMAGE_PORTRAIT} />
                        <source media="(orientation: landscape)" srcSet={ENV.BACKGROUND_IMAGE_LANDSCAPE} />
                        <img 
                            className={pageStyles.backgroundImage}
                            src={ENV.BACKGROUND_IMAGE_LANDSCAPE} 
                            alt="Band Background"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </div>
                <div className={pageStyles.heroContent}>
                    <h1 className={`${textStyles.bandNameText} band-name-font`}>
                        Temporary<br/>Friends
                    </h1>
                </div>
            </section>

            <div className={pageStyles.homeHighlightsGrid}>
                <LatestRelease />

                <Suspense fallback={<div className={layoutStyles.container}><ShowSkeleton /></div>}>
                    <NextShow />
                </Suspense>
            </div>
        </main>
    );
}