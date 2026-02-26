import { ENV } from '@/components/config';
import { PlatformsSection, SectionTitle } from '@/components/clientSections';
import textStyles from '@/components/styles/globals/text.module.css';

export default function Streaming() {

    return (
        <div>
            <SectionTitle id="streaming" title="Streaming Platforms" />
            <PlatformsSection links={ENV.PLATFORMS.streaming} />
            <p className={textStyles.noteText}>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</p>
        </div>
    )
}
