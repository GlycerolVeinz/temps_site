
import { ENV } from '@/components/config';

import { UpcomingShowsSection, SectionTitle } from '@/components/clientSections';

export default function Shows() {

    return (
        <div>
            <SectionTitle id="shows" title="Upcoming Shows" />
            <UpcomingShowsSection shows={ENV.PLATFORMS.shows} />
        </div>
    )
}