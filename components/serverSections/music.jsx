
import { EPS } from '@/components/config';

export default function Music() {

    return (
        <div>
            <SectionTitle id="music" title="Our Music" />
            <MusicSection music={EPS} />
        </div>
    )
}
