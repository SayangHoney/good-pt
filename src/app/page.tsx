'use client';

import { MainComponent } from '@/components/main';
import styles from './page.module.css';
import { TopComponent } from '@/components/Top';

export default function Home() {
  return (
    <main className={styles.main}>
      <TopComponent />
      <MainComponent />
    </main>
  );
}
