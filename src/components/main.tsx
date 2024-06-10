import styled from 'styled-components';
import Image from 'next/image';

import MainIPhone from '@/assets/main_iphone.png';

import Clock from '@/assets/clock.png';
import MegaPhone from '@/assets/megaPhone.png';
import Target from '@/assets/target.png';
import ThunderBubble from '@/assets/thunder_bubble.png';
import ChatBubble from '@/assets/chat_bubble.png';
import { useEffect, useRef } from 'react';

export const MainComponent = () => {
  const commentRef1 = useRef<any>(null);
  const commentRef2 = useRef<any>(null);
  const imageRef = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imageRef) {
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
        { threshold: 0.8 }
      );

      observer.observe(imageRef.current as Element);
    }
  }, [imageRef]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (commentRef1) {
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
        { threshold: 0.8 }
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
            target.style.transform = 'translateY(50px)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(100px)';
          }
        },
        { threshold: 0.8 }
      );

      observer.observe(commentRef2.current as Element);
    }
  }, [commentRef2]);

  return (
    <MainWrap id="home">
      <Image
        className="icon-motion"
        src={Clock}
        alt="Clock"
        style={{ position: 'absolute', top: 15, right: 250 }}
      />
      <Image
        className="icon-motion"
        src={MegaPhone}
        alt="MegaPhone"
        style={{ position: 'absolute', top: 700, left: 250 }}
      />
      <Image
        className="icon-motion"
        src={Target}
        alt="Target"
        style={{ position: 'absolute', top: 1200, right: 350, zIndex: 1 }}
      />
      <Image
        className="icon-motion"
        src={ChatBubble}
        alt="Chat Bubble"
        style={{
          position: 'absolute',
          height: 230,
          width: 215,
          top: 1500,
          left: 250,
          zIndex: 1,
        }}
      />
      <Image
        className="icon-motion"
        src={ThunderBubble}
        alt="Thunder Bubble"
        style={{
          position: 'absolute',
          height: 180,
          width: 200,
          top: 1800,
          right: 250,
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}>
        <div
          ref={commentRef1}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            transition: '1s',
            transitionDelay: '800ms',
          }}>
          <p className="text1 ">굿피티</p>
          <p className="text2">와 함께,</p>
        </div>
        <Image
          ref={imageRef}
          style={{ opacity: 0, transition: '1s' }}
          src={MainIPhone}
          alt="iphone"
          width={396}
          height={802}
        />
        <div
          ref={commentRef2}
          style={{ opacity: 0, transition: '1s', transitionDelay: '1s' }}>
          <p className="text2">발표 능력 UP!</p>
        </div>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  width: 100%;

  p {
    font-size: 70px;
    color: white;
    &.text1 {
      color: #1ac8ff;
      font-weight: 700;
    }
  }

  .icon-motion {
    position: absolute;
    animation: motion 1s ease-in-out 0s infinite alternate;

    @keyframes motion {
      0% {
        margin-top: 30px;
      }
      100% {
        margin-top: 0px;
      }
    }
  }
`;
