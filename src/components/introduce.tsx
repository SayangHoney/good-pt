import Image from 'next/image';
import styled from 'styled-components';

import Onbording from '@/assets/onbording/onbording_group.png';
// import Home from '@/assets/home/home.png';

import { LegacyRef, ReactNode, useEffect, useRef } from 'react';
import { useIntroduce } from './introduce.hook';
import { Home } from './layouts/home';

interface ILayout {
  title: string;
  Comment1: ReactNode;
  Comment2: ReactNode;
  Images: ReactNode;
  ref?: LegacyRef<HTMLDivElement>;
}

export const Intorduce = () => {
  const {
    target1,
    target2,
    target2_1,
    target2_2,
    target2_3,
    target2_4,
    target3,
    target4,
  } = useIntroduce();

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
              width: '100%',
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
      <Layout
        title="Learning"
        Comment1={
          <div>
            <p>
              학습을 선택하여 <strong>실질적인</strong>
            </p>
            <p>
              <strong>발표 연습</strong>을 도와줄게요.
            </p>
          </div>
        }
        Comment2={
          <p>
            즉흥 발표, 발음/속도 조절, 발성 연습으로 실제와 같은 시나리오를 통해
            발표 연습을 도와드려요.
          </p>
        }
        Images={<></>}
      />
      <Layout
        title="Study Calendar"
        Comment1={
          <div>
            <p>
              <strong>학습 일정</strong>을 기록하고
            </p>
            <p>
              <strong>맞춤 학습</strong>을 제공받아요.
            </p>
          </div>
        }
        Comment2={
          <p>
            캘린더를 통해 오늘 학습할 내용을 파악하고 이전에 했던 학습 기록을
            찾아볼 수 있어요.
          </p>
        }
        Images={<></>}
      />
      <Layout
        title="AI Summary"
        Comment1={
          <div>
            <p>
              <strong>AI 정리</strong>로 발표 자료를
            </p>
            <p> 빠르고 쉽게 요약해요.</p>
          </div>
        }
        Comment2={
          <p>
            파일 또는 이미지를 업로드 하면 AI인 말풍이가 자료를 분석 및 요약하여
            핵심 내용이 돋보이도록 정리해요. 발표 준비가 더욱 쉬워질 거에요!
          </p>
        }
        Images={<></>}
      />
      <Layout
        title="Posting"
        Comment1={
          <div>
            <p>
              <strong>발표에 도움</strong>이 되는 팁과
            </p>
            <p>정보를 얻을 수 있어요.</p>
          </div>
        }
        Comment2={
          <p>
            포스팅은 발표에 대한 다양한 정보를 제공해요. 발표에 도움이 되는
            글부터 영상 등 여러 콘텐츠를 통해 발표에 자신감을 더해줄거에요!
          </p>
        }
        Images={<></>}
      />
    </IntroduceWrap>
  );
};

const IntroduceWrap = styled.div`
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
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
