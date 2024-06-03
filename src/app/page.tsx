'use client';

import { MainComponent } from '@/components/main';
import { TopComponent } from '@/components/Top';
import { MainPr } from '@/components/mainPr';
import { Overview } from '@/components/overview';
import { Services } from '@/components/services';
import { Intorduce } from '@/components/introduce';
import styled from 'styled-components';

export default function Home() {
  return (
    <MainWrap>
      <TopComponent />
      <MainComponent />
      <MainPr />
      <Overview />
      <Services />
      <Intorduce />
    </MainWrap>
  );
}

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: hidden;

  background: black;
`;
