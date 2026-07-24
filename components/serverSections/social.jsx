import { fetchSanityData } from '@/sanity/lib/fetchData';
import SectionWrapper from './SectionWrapper';
import { PlatformsSection } from '@/components/clientSections';

const SOCIAL_QUERRY = `*[_type == "social"]{
    _id,
    title,
    url,
    linkText
}`

export default async function Social() {
    const socialLinks = await fetchSanityData(SOCIAL_QUERRY);
    socialLinks.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <SectionWrapper id="social" title="Social Media">
            <PlatformsSection links={socialLinks} />
        </SectionWrapper>
    )
}
