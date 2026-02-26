import { client } from '@/sanity/lib/client';
import { BandMembersSection, SectionTitle } from '@/components/clientSections';

const BAND_MATES_QUERRY = `*[_type == "bandMember"]{
    _id,
    firstName,
    lastName,
    instrument,
    instagram,
    email,
    "photoUrl": photo.asset->url
}`

export default async function BandMates() {
    const bandMates = await client.fetch(BAND_MATES_QUERRY);
    
    return (
        <div>
            <SectionTitle id="bandmates" title="Band Members" />
            <BandMembersSection members={bandMates} />
        </div>
    )
}
