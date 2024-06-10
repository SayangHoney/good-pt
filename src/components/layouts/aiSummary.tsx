import Image from 'next/image';
import styled from 'styled-components';

import AiSummaryImage from '@/assets/aiSummary/ai_summary_group.png';
import PhoneFrame from '@/assets/aiSummary/phone_frame.png';

import { useEffect, useRef, useState } from 'react';

export const AiSummary = () => {
  const ref = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLImageElement>(null);
  const commentRef1 = useRef<HTMLImageElement>(null);
  const commentRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (ref) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            // target.style.transform = 'translateY(0)';
          } else {
            // target.style.opacity = '0';
            // target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: [1, 0] }
      );
      observer.observe(ref.current as Element);
    }
  }, [ref]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (titleRef) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            // target.style.transform = 'translateY(0)';
          } else {
            // target.style.opacity = '0';
            // target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: [1, 0] }
      );
      observer.observe(titleRef.current as Element);
    }
  }, [titleRef]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (commentRef1) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            // target.style.transform = 'translateY(0)';
          } else {
            // target.style.opacity = '0';
            // target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: [1, 0] }
      );
      observer.observe(commentRef1.current as Element);
    }
  }, [commentRef1]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (commentRef2) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            // target.style.transform = 'translateY(0)';
          } else {
            // target.style.opacity = '0';
            // target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: [1, 0] }
      );
      observer.observe(commentRef2.current as Element);
    }
  }, [commentRef2]);

  return (
    <LayoutWrap>
      <DescriptionWrap>
        <TitleWrap
          ref={titleRef}
          style={{
            color: '#2B73FF',
            fontWeight: 900,
            fontSize: '38px',
            lineHeight: '90px',
            opacity: 0,
            transition: '1s',
          }}>
          AI Summary
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap ref={commentRef1}>
            <div>
              <p>
                <strong>AI 정리</strong>로 발표 자료를
              </p>
              <p> 빠르고 쉽게 요약해요.</p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap ref={commentRef2}>
            <p>
              파일 또는 이미지를 업로드 하면 AI인 말풍이가 자료를 분석 및
              요약하여 핵심 내용이 돋보이도록 정리해요. 발표 준비가 더욱 쉬워질
              거에요!
            </p>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      {/* images */}
      <ImageLoopWrap>
        <Image ref={ref} src={AiSummaryImage} width={1752} alt="ai_summary" />
        <Image src={AiSummaryImage} width={1752} alt="ai_summary" />
        <Image src={AiSummaryImage} width={1752} alt="ai_summary" />
      </ImageLoopWrap>
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  padding: 180px 230px;
  transform: translateY(50px);
`;

const TitleWrap = styled.p`
  color: #2b73ff;
  font-weight: 900;
  font-size: 38px;
  line-height: 90px;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const LayoutComment1Wrap = styled.div`
  font-weight: lighter;
  flex: 0 0 50%;
  font-size: 60px;
  line-height: 75px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: 1s;
  transition-delay: 300ms;
  opacity: 0;
`;

const LayoutComment2Wrap = styled.div`
  width: 100%;
  color: white;
  flex: 1 1 auto;
  font-weight: lighter;
  font-size: 26px;
  line-height: 34px;
  transition: 1s;
  transition-delay: 300ms;
  opacity: 0;
`;

const ImageLoopWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  /* transform: translateX(-950px); */
  animation: loop 8s linear infinite;
  transition: all 1s;

  @keyframes loop {
    from {
      transform: translateX(-950px);
    }

    to {
      transform: translateX(-2752px);
    }
  }

  @-webkit-keyframes loop {
    from {
      transform: translateX(-950px);
    }

    to {
      transform: translateX(-2752px);
    }
  }
`;
