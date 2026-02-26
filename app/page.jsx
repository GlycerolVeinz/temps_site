import pageStyles from '@/components/styles/module/Page.module.css';

import MenuButton from '@/components/menuButton';
import Landing from '@/components/landing';
import Content from '@/components/content';

export default function Home() {
  return (
    <div className={pageStyles.pageContainer}>

      <MenuButton />

      <Landing />

      <Content />
    </div>
  );
}
