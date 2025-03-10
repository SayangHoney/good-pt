'use client';

import { MainComponent } from '@/components/main';
import NavigationComponent from '@/components/NavigationBar';
import { MainPr } from '@/components/mainPr';
import { Overview } from '@/components/overview';
import { Services } from '@/components/services';
import { Intorduce } from '@/components/introduce';
import styled from 'styled-components';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <MainWrap>
      <nav>
        <NavigationComponent />
      </nav>

      {/* Top Floating Bar */}
      <FloatingBtnWrap
        onClick={() => {
          window.location.href = '#top';
        }}>
        ▲ Top
      </FloatingBtnWrap>

      <MainComponent />
      <MainPr />
      <Overview />
      <Services />
      <Intorduce />
      <Footer />
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
  position: relative;

  background: black;
`;

const FloatingBtnWrap = styled.button`
  background: #2b73ff;
  border: #76a4ff;
  box-shadow: 0 3px 9px black, inset 0 0 9px white;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
  }
`;
