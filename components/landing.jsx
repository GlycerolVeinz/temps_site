'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ENV } from '@/components/config';
import { useOrientation } from '@/lib/hooks/useOrientation';
import textStyles from '@/components/styles/globals/text.module.css';
import pageStyles from '@/components/styles/module/Page.module.css';


export default function Landing() {
    const landingRef = useRef(null);
    const isPortrait = useOrientation();

    return (
        <section className={pageStyles.landingSection} id="landing" ref={landingRef}>
            <div className={pageStyles.backgroundImageWrapper}>
                <Image className={pageStyles.backgroundImage}
                    src={isPortrait ? ENV.BACKGROUND_IMAGE_PORTRAIT : ENV.BACKGROUND_IMAGE_LANDSCAPE}
                    layout="fill"
                    objectFit="cover"
                    alt="Band Background"
                />
            </div>

            <div className={pageStyles.landingContent}>
                <h1 className={`${textStyles.bandNameText} band-name-font`}>Temporary</h1>
                <h1 className={`${textStyles.bandNameText} band-name-font`}>Friends</h1>
            </div>
        </section>
    )
}
