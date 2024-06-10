import {
  MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SpeechBubble from '@/assets/speech_practice.png';
import AiData from '@/assets/ai_summary.png';
import Chart from '@/assets/chart.png';

export const Services = () => {
  const target = useRef<any>(null);
  const target1 = useRef<any>(null);
  const target2 = useRef<any>(null);
  const target3 = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(50px)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(100px)';
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(target.current as Element);
    }
  }, [target]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target1) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(50px)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(100px)';
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(target1.current as Element);
    }
  }, [target1]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target2) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(50px)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(100px)';
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(target2.current as Element);
    }
  }, [target2]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target3) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(50px)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(100px)';
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(target3.current as Element);
    }
  }, [target3]);

  // 바탕 사각형
  const Squire = () => {
    return (
      <SquireWrap />
      //   <strong
      //   style={{ fontSize: '40px', lineHeight: '90px', color: '#2B73FF' }}>
      //   {name}
      // </strong>
      // <SquireAminationWrap>
      // </SquireAminationWrap>
    );
  };

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            transition: 'all 1s',
            opacity: 0,
            transform: 'translateY(-50px)',
            gap: '80px',
          }}
          ref={target}>
          <Squire />
          <Squire />
          <Squire />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            gap: '80px',
          }}>
          <IconNameWrap ref={target1} style={{ transitionDelay: '0.2s' }}>
            <Image src={SpeechBubble} alt="" width={318} />
            <strong
              style={{
                fontSize: '40px',
                lineHeight: '90px',
                color: '#2B73FF',
                transform: 'translateY(50px)',
              }}>
              발표 연습
            </strong>
          </IconNameWrap>
          <IconNameWrap ref={target2} style={{ transitionDelay: '0.4s' }}>
            <Image src={AiData} alt="" width={318} />
            <strong
              style={{
                fontSize: '40px',
                lineHeight: '90px',
                color: '#2B73FF',
                transform: 'translateY(50px)',
              }}>
              AI 자료 요약
            </strong>
          </IconNameWrap>
          <IconNameWrap ref={target3} style={{ transitionDelay: '0.6s' }}>
            <Image src={Chart} alt="" width={318} />
            <strong
              style={{
                fontSize: '40px',
                lineHeight: '90px',
                color: '#2B73FF',
                transform: 'translateY(50px)',
              }}>
              학습 결과 분석
            </strong>
          </IconNameWrap>
        </div>
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
  position: relative;
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

const IconNameWrap = styled.div`
  width: 395px;
  height: 495px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  transform: translateY(50px);
  transition: all 1s;
`;
