import { fetchSanityData } from '@/sanity/lib/fetchData';
import BandMembersSection from '@/components/shared/BandMembersSection';
import PlatformsSection from '@/components/shared/PlatformsSection';
import textStyles from '@/components/styles/globals/text.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export const metadata = {
  title: 'The Band - Temporary Friends',
  description: 'Meet the members of Temporary Friends. Learn about our instruments, read our bios, and connect with us on social media.',
};

export const revalidate = 86400; // ISR

const BAND_MEMBERS_QUERY = `*[_type == "bandMember"] | order(order asc) {
    _id,
    firstName,
    lastName,
    instrument,
    instagram,
    email,
    photo,
    bio
}`;

const SOCIALS_QUERY = `*[_type == "social"]{
    _id,
    title,
    url,
    linkText
}`;

export default async function BandPage() {
    const members = await fetchSanityData(BAND_MEMBERS_QUERY);
    const socials = await fetchSanityData(SOCIALS_QUERY);

    return (
        <main className={layoutStyles.container}>
            <h1 className={textStyles.titleText}>The Band</h1>
            <BandMembersSection members={members} />

            <h2 className={textStyles.titleText} style={{ marginTop: 'var(--space-8)' }}>Socials</h2>
            <PlatformsSection links={socials} />
        </main>
    );
}