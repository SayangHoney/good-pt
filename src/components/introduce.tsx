import Image from 'next/image';
import styled from 'styled-components';

import Onbording from '@/assets/onbording/onbording_group.png';
// import Home from '@/assets/home/home.png';

import { LegacyRef, ReactNode, useEffect, useRef } from 'react';
import { useIntroduce } from './introduce.hook';
import { Home } from './layouts/home';
import { Learning } from './layouts/learning';
import { StudyCalendar } from './layouts/studyCalednar';
import { AiSummary } from './layouts/aiSummary';
import { Posting } from './layouts/posting';

interface ILayout {
  title: string;
  Comment1: ReactNode;
  Comment2: ReactNode;
  Images: ReactNode;
  ref?: LegacyRef<HTMLDivElement>;
}

export const Intorduce = () => {
  const { target1, target2, target2_1, target2_2, target2_3, target2_4 } =
    useIntroduce();

  const Layout = ({ title, Comment1, Comment2, Images }: ILayout) => (
    <LayoutWrap>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
        }}>
        <div>
          <p
            style={{
              color: '#2B73FF',
              fontWeight: 900,
              fontSize: '38px',
              lineHeight: '90px',
            }}>
            {title}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap>{Comment1}</LayoutComment1Wrap>
          <LayoutComment2Wrap>{Comment2}</LayoutComment2Wrap>
        </div>
      </div>
      <div>{Images}</div>
    </LayoutWrap>
  );

  return (
    <IntroduceWrap>
      <Layout
        title="Onbording"
        Comment1={
          <div>
            <p>학습에 앞서, 고민을</p>
            <strong>분석하고 가이드를 제공해요.</strong>
          </div>
        }
        Comment2={
          <div>
            <p>
              온보딩을 통해 굿피티에 대해 알 수 있어요. 고민인 항목을 선택하고
            </p>
            <p>분석하여 적절한 학습 내용이 제공될 수 있도록 도와준답니다.</p>
          </div>
        }
        Images={
          <Image
            ref={target1}
            src={Onbording}
            alt="onbording1"
            style={{
              width: '1386px',
              opacity: 0,
              transform: 'translateY(100px)',
              transition: 'all 1s',
            }}
          />
        }
      />

      <Home
        target2={target2}
        target2_1={target2_1}
        target2_2={target2_2}
        target2_3={target2_3}
        target2_4={target2_4}
      />

      <Learning />

      <StudyCalendar />

      <AiSummary />

      <Posting />
    </IntroduceWrap>
  );
};

const IntroduceWrap = styled.div`
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  margin: 0 0 auto;
`;

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 230px;
`;

const LayoutComment1Wrap = styled.div`
  font-weight: lighter;
  flex: 0 0 50%;
  font-size: 60px;
  line-height: 75px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const LayoutComment2Wrap = styled.div`
  width: 100%;
  color: white;
  flex: 1 1 auto;
  font-weight: lighter;
  font-size: 26px;
  line-height: 34px;
`;
