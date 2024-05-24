'use client';

import styles from './page.module.css';
import { TopComponent } from '@/components/Top';

export default function Home() {
  return (
    <main className={styles.main}>
      <TopComponent />
    </main>
  );
}
