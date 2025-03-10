import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const CommentComponent = () => {
  const mainRef = useRef<any>(null);
  const subRef = useRef<any>(null);

  // .mainRef 등장/숨김 effect
  useEffect(() => {
    let observer: IntersectionObserver;

    if (mainRef) {
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
        { threshold: 0.5 }
      );

      observer.observe(mainRef.current as Element);
    }
  }, [mainRef]);
  // .subRef 등장/숨김 effect
  useEffect(() => {
    let observer: IntersectionObserver;

    if (subRef) {
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
        { threshold: 0.5 }
      );

      observer.observe(subRef.current as Element);
    }
  }, [subRef]);

  return (
    <CommentComponentWrap>
      <MainObjectWrap ref={mainRef}>
        <Comment1Wrap>
          굿피티와 함께,
        </Comment1Wrap>
        <Comment2Wrap>
          발표를 더욱 쉽고 효과적으로!
        </Comment2Wrap>
      </MainObjectWrap>

      <SubObjectWrap ref={subRef}>
        <Comment3Wrap>
          발음 교정, 발성 연습, 말하기 속도 조절까지
        </Comment3Wrap>
        <Comment4Wrap >
          발표에 필요한 모든 학습을 도와줄게요!
        </Comment4Wrap>
      </SubObjectWrap>
    </CommentComponentWrap>
  );
};

export const MainPr = () => {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div
        id="video"
        style={{
          marginTop: '500px',
          height: '847px',
          overflow: 'hidden',
        }}>
        <EclipseWrap>
          <CommentComponent />
        </EclipseWrap>
      </div>

      <VideoWrap>
        <TestWrap
          videoId="9WYE8Pci45k"
          opts={{ height: '100%', width: '100%' }}
        />
      </VideoWrap>

      <GradiantWrap className="gradiant" />
    </div>
  );
};

const CommentComponentWrap = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 80px;
`

const MainObjectWrap = styled.div`
  position: relative;
  top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: 1s;

  @media screen and (max-width: 1920px) {
    top: 30px;
  }
`

const Comment1Wrap = styled.div`
  font-size: 64px;
  line-height: 90px;
`
const Comment2Wrap = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 90px;
`
const Comment3Wrap = styled.div`
  font-size: '64px';
  font-weight: 700;
  line-height: '90px';
`
const Comment4Wrap = styled.div`
  font-size: 32px;
  line-height: 48px;
`

const SubObjectWrap = styled.div`
  position: relative;
  top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: 1s;

  @media screen and (max-width: 1920px) {
    top: 30px;
  }
`

const EclipseWrap = styled.div`
  width: 100vw;
  height: 1694px;
  border-radius: 100%;
  background-image: linear-gradient(#c4c3ff 50%, black);
  background-color: #c4c3ff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1920px) {
    height: 1000px;
    top: 350px;
  }
`;

const GradiantWrap = styled.div`
  height: 850px;
  width: 100%;
  background-image: linear-gradient(#c4c3ff 40%, black);
  position: relative;
`;

const VideoWrap = styled.div`
  height: 768px;
  width: 1364px;
  background: #9d9d9d;
  display: flex;
  margin: 0 0 auto;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 40%;
  transform: translate(-50%, 40%);

  @media screen and (max-width: 1920px) {
    width: 818px;
    height: 460px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
  }
`;

const TestWrap = styled(YouTube)`
  width: 100%;
`