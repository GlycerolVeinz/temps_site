import { ENV } from '@/components/config';

import textStyles from '@/components/styles/globals/text.module.css';
import pageStyles from '@/components/styles/module/Page.module.css';
import Streaming from './serverSections/streaming';
import BandMates from './serverSections/bandMates';
import Shows from './serverSections/shows';
import Social from './serverSections/social';
import Music from './serverSections/music';


export default function Content() {

    return (
        <section className={pageStyles.contentContainer}>
            
            <Streaming />
            
            <Shows/>

            <Social />

            <Music />

            <BandMates />

            <footer className={textStyles.footerText}>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</footer>
        </section>
    )
}
