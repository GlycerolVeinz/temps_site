import { SectionTitle } from '@/components/clientSections';

export default function SectionWrapper({ id, title, children }) {
    return (
        <div>
            <SectionTitle id={id} title={title} />
            {children}
        </div>
    );
}
