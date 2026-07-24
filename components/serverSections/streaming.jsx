import { fetchSanityData } from '@/sanity/lib/fetchData';
import SectionWrapper from './SectionWrapper';
import { PlatformsSection } from '@/components/clientSections';
import textStyles from '@/components/styles/globals/text.module.css';

const STREAMING_QUERRY = `*[_type == "platform"]{
    _id,
    title,
    url,
    linkText,
    hasWrongAssociation
}`

export default async function Streaming() {
    const streamingLinks = await fetchSanityData(STREAMING_QUERRY);
    streamingLinks.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <SectionWrapper id="streaming" title="Streaming Platforms">
            <PlatformsSection links={streamingLinks} />
            <p className={textStyles.noteText}>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</p>
        </SectionWrapper>
    )
}
