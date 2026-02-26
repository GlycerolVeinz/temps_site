import { ENV } from '@/components/config';
import { PlatformsSection, SectionTitle } from '@/components/clientSections';


export default function Social() {

    return (
        <div>
            <SectionTitle id="social" title="Social Media" />
            <PlatformsSection links={ENV.PLATFORMS.social} />
        </div>
    )
}
