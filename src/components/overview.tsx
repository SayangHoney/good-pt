import styled from 'styled-components';

import Emotion1 from '@/assets/emotions/emotion1.png';
import Emotion2 from '@/assets/emotions/emotion2.png';
import Emotion3 from '@/assets/emotions/emotion3.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const Overview = () => {
  const titleRef = useRef<any>(null);
  const commentRef1 = useRef<any>(null);
  const commentRef2 = useRef<any>(null);

  const bubbleRef1 = useRef<any>(null);
  const bubbleRef2 = useRef<any>(null);
  const bubbleRef3 = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (titleRef) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.5 }
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
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.3 }
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
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(commentRef2.current as Element);
    }
  }, [commentRef2]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (bubbleRef1) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(bubbleRef1.current as Element);
    }
  }, [bubbleRef1]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (bubbleRef2) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(bubbleRef2.current as Element);
    }
  }, [bubbleRef2]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (bubbleRef3) {
      observer = new IntersectionObserver(
        ([e]) => {
          const target = e.target as HTMLElement;
          if (e.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(bubbleRef3.current as Element);
    }
  }, [bubbleRef3]);

  return (
    <OverviewWrap>
      <span
        className="title"
        ref={titleRef}
        style={{ opacity: 0, transition: '1s' }}>
        Overview
      </span>
      <div
        className="comment_1"
        ref={commentRef1}
        style={{ opacity: 0, transition: '1s', transitionDelay: '300ms' }}>
        <span>나날이 늘어나는</span>
        <span>
          <strong>발표의 중요성</strong>
        </span>
      </div>
      <div
        className="comment_2"
        ref={commentRef2}
        style={{ opacity: 0, transition: '1s', transitionDelay: '300ms' }}>
        <span>
          서류 봉투에서 제품을 꺼내 맥북 에어의 가벼움과 휴대성을 새롭게
          보여주었던 스티브잡스.
        </span>
        <span>그의 프레젠테이션은 오늘까지도 크게 회자되고 있어요.</span>
        <span>
          많은 기업에서도 지원자, 신입에게 PT를 제안하는 경우가
          늘어나는상황에서,
        </span>
        <span>
          굿피티는 효과적인 발표를 위한 학습을 도와줄 수 있는 서비스입니다.
        </span>
      </div>

      <SpeechBubbleWrap>
        <SpeechBubbleRightWrap
          style={{ top: '600px', marginRight: '300px' }}
          ref={bubbleRef1}>
          <div>
            <Image src={Emotion1} alt="Emotion1" width={150} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <p>정해진 시간 안에 발표하는 것이 너무 어려워요.</p>
            <p>대본을 안보고 발표를 잘 하고 싶어요!</p>
          </div>
        </SpeechBubbleRightWrap>

        <SpeechBubbleLeftWrap
          style={{ top: '880px', marginLeft: '300px' }}
          ref={bubbleRef2}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <p>발표 자료 정리하고 수정하는데 시간을 단축하고 싶어요.</p>
            <p>간단하게 요약해주는 서비스가 있었으면 좋겠어요!</p>
          </div>
          <div>
            <Image src={Emotion2} alt="Emotion2" width={150} />
          </div>
        </SpeechBubbleLeftWrap>

        <SpeechBubbleRightWrap
          ref={bubbleRef3}
          style={{
            top: '1160px',
            marginRight: '300px',
          }}>
          <div>
            <Image src={Emotion3} alt="Emotion3" width={150} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <p>발음이 정확하지 않아 말할 때 전달력이 떨어지는게</p>
            <p>고민이에요. 개선할 방법이 없을까요?</p>
          </div>
        </SpeechBubbleRightWrap>
      </SpeechBubbleWrap>
    </OverviewWrap>
  );
};

const OverviewWrap = styled.span`
  color: white;
  height: fit-content;
  width: 100%;
  position: relative;
  background-image: linear-gradient(black 40%, #2b73ff, #f1faff);

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    &.title {
      font-size: 44px;
      font-weight: 900;
      color: #2b73ff;
      margin-bottom: 80px;
    }
  }
  .comment_1 {
    font-size: 60px;
    line-height: 90px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
  .comment_2 {
    font-size: 32px;
    line-height: 48px;
  }
`;

const SpeechBubbleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 200px;
  gap: 50px;
  height: fit-content;
`;

const SpeechBubbleRightWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 113px 113px 0 113px;
  height: 226px;
  width: 948px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  opacity: 0;
  transition: 1s;

  p {
    font-size: 28px;
    line-height: 46px;
    color: black;
    font-weight: 500;
  }
`;

const SpeechBubbleLeftWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 113px 113px 113px 0;
  height: 226px;
  width: 948px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  opacity: 0;
  transition: 1s;

  p {
    font-size: 28px;
    line-height: 46px;
    color: black;
    font-weight: 500;
  }
`;
