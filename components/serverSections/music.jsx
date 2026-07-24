import { fetchSanityData } from '@/sanity/lib/fetchData';
import SectionWrapper from './SectionWrapper';
import { MusicSection } from '@/components/clientSections';

const MUSIC_QUERRY = `*[_type == "disc"]{
    _id,
    title,
    "coverUrl": cover.asset->url,
    songs
}`

export default async function Music() {
    const music = await fetchSanityData(MUSIC_QUERRY);

    return (
        <SectionWrapper id="music" title="Our Music">
            <MusicSection music={music} />
        </SectionWrapper>
    )
}
