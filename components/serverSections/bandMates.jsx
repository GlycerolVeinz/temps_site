import { fetchSanityData } from '@/sanity/lib/fetchData';
import SectionWrapper from './SectionWrapper';
import { BandMembersSection } from '@/components/clientSections';

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
    const bandMates = await fetchSanityData(BAND_MATES_QUERRY);
    
    return (
        <SectionWrapper id="bandmates" title="Band Members">
            <BandMembersSection members={bandMates} />
        </SectionWrapper>
    )
}
