import { ReactNode, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SpeechBubble from '@/assets/speech_practice.png';
import AiData from '@/assets/ai_summary.png';
import Chart from '@/assets/chart.png';

// 바탕 사각형
const Squire = ({
  children,
  className,
  name,
}: {
  children: ReactNode;
  name: string;
  className?: string;
}) => {
  return (
    <SquireAminationWrap
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <SquireWrap className={className}>{children}</SquireWrap>
      <strong
        style={{ fontSize: '40px', lineHeight: '90px', color: '#2B73FF' }}>
        {name}
      </strong>
    </SquireAminationWrap>
  );
};

export const Services = () => {
  const [scroll, setScroll] = useState('');

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    console.log('scrollY', scrollY);
    if (scrollY >= 48) {
      setScroll('header-fixed');
    } else setScroll('');
    // 4500px일 때 동작
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [window.scroll()]);

  return (
    <ServicesWrap>
      <QuestionWrap>
        <div className="title">
          <p className="q">어떤 서비스가 있을까요?</p>
        </div>

        <div className="comment1">
          <p>
            <strong>실질적인 발표능력</strong>을 향상
          </p>
          <p>시켜줄 학습을 소개할게요!</p>
        </div>

        <div className="comment2">
          <p>굿피티는 세 가지의 주요 서비스를 제공합니다.</p>
        </div>
      </QuestionWrap>

      <MethodsWrap>
        <Squire name="발표 연습">
          <Image
            className="speech-bubble"
            src={SpeechBubble}
            alt="말풍선"
            width={318}
          />
        </Squire>

        <Squire name="AI 자료 요약">
          <Image className="ai-data" src={AiData} alt="데이터" width={318} />
        </Squire>

        <Squire name="학습 결과 분석">
          <Image className="chart" src={Chart} alt="차트" width={318} />
        </Squire>
      </MethodsWrap>
    </ServicesWrap>
  );
};

const ServicesWrap = styled.div`
  padding-top: 200px;
  width: 100%;
  height: 1600px;
  background: #f1faff;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const QuestionWrap = styled.div`
  .title {
    display: flex;
    justify-content: center;
    .q {
      font-weight: 900;
      font-size: 38px;
      line-height: 90px;
      color: #2b73ff;
    }
  }

  .comment1 {
    margin-top: 150px;
    font-size: 60px;
    line-height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comment2 {
    margin-top: 100px;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MethodsWrap = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

const SquireAminationWrap = styled.div`
  animation: fadein 2s, moveup 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveup {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const SquireWrap = styled.div`
  width: 395px;
  height: 395px;
  background-image: linear-gradient(-29deg, #2b73ff, #3bd0ff);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-fill-mode: backwards;
`;

const IconWrap = styled.div`
  animation: fadein1 2s, moveup1 1s;
  animation-delay: 300ms;

  @keyframes fadein1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveup1 {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
