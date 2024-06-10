import Image from 'next/image';
import styled from 'styled-components';

import Preview1 from '@/assets/posting/preview1.png';
import Preview2 from '@/assets/posting/preview2.png';
import Description1 from '@/assets/posting/description1.png';
import Description2 from '@/assets/posting/description2.png';
import { useEffect, useRef } from 'react';

export const Posting = () => {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const ref4 = useRef<any>(null);

  const titleRef = useRef<any>(null);
  const commentRef1 = useRef<any>(null);
  const commentRef2 = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref1) {
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
        { threshold: 0.1 }
      );
      observer.observe(ref1.current as Element);
    }
  }, [ref1]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref2) {
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
        { threshold: 1 }
      );
      observer.observe(ref2.current as Element);
    }
  }, [ref2]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref3) {
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
        { threshold: 1 }
      );
      observer.observe(ref3.current as Element);
    }
  }, [ref3]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref4) {
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
      observer.observe(ref4.current as Element);
    }
  }, [ref4]);

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
        { threshold: 0.5 }
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
          Posting
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap ref={commentRef1}>
            <div>
              <p>
                <strong>발표에 도움</strong> 이 되는 팁과
              </p>
              <p>정보를 얻을 수 있어요.</p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap ref={commentRef2}>
            <div>
              <p>
                포스팅은 발표에 대한 다양한 정보를 제공해요. 발표에 도움이 되는
              </p>
              <p>
                글부터 영상 등 여러 콘텐츠를 통해 발표에 자신감을 더해줄거에요!
              </p>
            </div>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      {/* images */}
      <ContentWrap>
        <LeftWrap ref={ref1}>
          <div
            style={{
              position: 'absolute',
              height: '2000px',
              width: '535px',
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 85%,rgba(0, 0, 0, 1) 95%)',
              zIndex: 1,
            }}
          />
          <Image width={535} src={Preview1} alt="preview_left" />
        </LeftWrap>

        <RightWrap>
          <RightTopWrap>
            <Image
              ref={ref2}
              src={Description1}
              alt="preview_right_top1"
              style={{
                position: 'absolute',
                top: '200px',
                left: '-100px',
                transform: 'translateY(-50px)',
                opacity: 0,
                transition: 'all 1s',
              }}
            />
            <Image
              ref={ref3}
              src={Description2}
              alt="preview_right_top2"
              style={{
                position: 'absolute',
                top: '450px',
                left: '-100px',
                transform: 'translateY(-50px)',
                opacity: 0,
                transition: 'all 1s',
              }}
            />
          </RightTopWrap>
          <RightBottomWrap>
            <Image
              ref={ref4}
              width={470}
              src={Preview2}
              alt="preview_right_bottom"
              style={{
                transition: 'all 1s',
              }}
            />
          </RightBottomWrap>
        </RightWrap>
      </ContentWrap>
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 180px 230px;
  transform: translateY(50px);
  height: 3000px;
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

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

const LeftWrap = styled.div`
  transition: all 1s;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 1s;
`;

const RightTopWrap = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  transition: all 1s;
`;
const RightBottomWrap = styled.div`
  flex: 1 1 auto;
`;
