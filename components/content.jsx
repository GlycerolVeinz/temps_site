'use client';

import React, { useState } from 'react';

import { ENV, EPS } from '@/components/config';

import { copyToClipboard } from '@/lib/clipboard';
import {
    PlatformsSection,
    BandMembersSection,
    UpcomingShowsSection,
    SectionTitle,
    MusicSection
} from '@/components/sections';
import textStyles from '@/components/styles/globals/text.module.css';
import pageStyles from '@/components/styles/module/Page.module.css';


export default function Content() {

    const [copiedLink, setCopiedLink] = useState("");
    const handleCopy = (text) => copyToClipboard(text, setCopiedLink);

    return (
        <section className={pageStyles.contentContainer}>
            <SectionTitle id="streaming" title="Streaming Platforms" />
            <PlatformsSection links={ENV.PLATFORMS.streaming} onCopy={handleCopy} copiedLink={copiedLink} />
            <p className={textStyles.noteText}>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</p>

            <SectionTitle id="shows" title="Upcoming Shows" />
            <UpcomingShowsSection shows={ENV.PLATFORMS.shows} />

            <SectionTitle id="social" title="Social Media" />
            <PlatformsSection links={ENV.PLATFORMS.social} onCopy={handleCopy} copiedLink={copiedLink} />

            <SectionTitle id="music" title="Our Music" />
            <MusicSection music={EPS} />

            <SectionTitle id="bandmates" title="Band Members" />
            <BandMembersSection members={ENV.BAND_MEMBERS} />

            <footer className={textStyles.footerText}>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</footer>
        </section>
    )
}
