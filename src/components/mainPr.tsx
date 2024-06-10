import { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export const MainPr = () => {
  const mainRef = useRef<any>(null);
  const subRef = useRef<any>(null);

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

  const CommentComponent = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
        }}>
        <div
          ref={mainRef}
          style={{
            position: 'relative',
            top: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: 0,
            transition: '1s',
          }}>
          <div style={{ fontSize: '64px', lineHeight: '90px' }}>
            굿피티와 함께,
          </div>
          <div
            style={{ fontSize: '64px', fontWeight: 700, lineHeight: '90px' }}>
            발표를 더욱 쉽고 효과적으로!
          </div>
        </div>

        <div
          ref={subRef}
          style={{
            position: 'relative',
            top: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: 0,
            transition: '1s',
          }}>
          <div style={{ fontSize: '32px', lineHeight: '48px' }}>
            발음 교정, 발성 연습, 말하기 속도 조절까지
          </div>
          <div style={{ fontSize: '32px', lineHeight: '48px' }}>
            발표에 필요한 모든 학습을 도와줄게요!
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div
        style={{
          marginTop: '500px',
          height: '847px',
          overflow: 'hidden',
        }}>
        <EclipseWrap>
          <CommentComponent />
        </EclipseWrap>
      </div>
      <VideoWrap
        videoId="QqY8uANoOcw"
        opts={{ height: '100%', width: '100%' }}
      />

      <GradiantWrap className="gradiant" />
    </div>
  );
};

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
`;

const GradiantWrap = styled.div`
  height: 850px;
  width: 100%;
  background-image: linear-gradient(#c4c3ff 40%, black);
  position: relative;
`;

const VideoWrap = styled(YouTube)`
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
`;
