import { client } from '@/sanity/lib/client';
import { MusicSection, SectionTitle } from '@/components/clientSections';

const MUSIC_QUERRY = `*[_type == "disc"]{
    _id,
    title,
    "coverUrl": cover.asset->url,
    songs
}`

export default async function Music() {
    const music = await client.fetch(MUSIC_QUERRY, {}, { cache: 'no-store' });

    return (
        <div>
            <SectionTitle id="music" title="Our Music" />
            <MusicSection music={music} />
        </div>
    )
}
