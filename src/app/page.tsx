'use client';

import { MainComponent } from '@/components/main';
import styles from './page.module.css';
import { TopComponent } from '@/components/Top';
import { MainPr } from '@/components/mainPr';
import { Overview } from '@/components/overview';
import { Services } from '@/components/services';
import { Intorduce } from '@/components/introduce';

export default function Home() {
  return (
    <main className={styles.main}>
      <TopComponent />
      <MainComponent />
      <MainPr />
      <Overview />
      <Services />
      <Intorduce />
    </main>
  );
}
