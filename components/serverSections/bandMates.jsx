import { ENV } from '@/components/config';

import { BandMembersSection, SectionTitle } from '@/components/clientSections';

export default function BandMates() {

    return (
        <div>
            <SectionTitle id="bandmates" title="Band Members" />
            <BandMembersSection members={ENV.BAND_MEMBERS} />
        </div>
    )
}
