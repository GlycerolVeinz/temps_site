import { client } from '@/sanity/lib/client';
import { PlatformsSection, SectionTitle } from '@/components/clientSections';

const SOCIAL_QUERRY = `*[_type == "social"]{
    _id,
    title,
    url,
    linkText
}`

export default async function Social() {
    const socialLinks = await client.fetch(SOCIAL_QUERRY);
    socialLinks.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <SectionTitle id="social" title="Social Media" />
            <PlatformsSection links={socialLinks} />
        </div>
    )
}
