import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Phone from '@/assets/learning/phone.png';
import Content from '@/assets/learning/contents.png';
import Description from '@/assets/learning/description.png';

export const Learning = () => {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);

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
        { threshold: 0.2 }
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
        { threshold: 0.7 }
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

  return (
    <LayoutWrap>
      <DescriptionWrap>
        <TitleWrap
          style={{
            color: '#2B73FF',
            fontWeight: 900,
            fontSize: '38px',
            lineHeight: '90px',
          }}>
          Learning
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap>
            <div>
              <p>
                학습을 선택하여 <strong>실질적인</strong>
              </p>
              <p>
                <strong>발표 연습</strong>을 도와줄게요.
              </p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap>
            <p>
              즉흥 발표, 발음/속도 조절, 발성 연습으로 실제와 같은 시나리오를
              통해 발표 연습을 도와드려요.
            </p>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      <ContentsWrap>
        <Image
          src={Phone}
          alt="phone"
          width={534}
          ref={ref1}
          style={{
            transform: 'translateY(50px)',
            transition: 'all 1s',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            src={Content}
            alt="content"
            width={425}
            ref={ref2}
            style={{
              transition: 'all 1s',
              animationDelay: '1s',
            }}
          />

          <div
            style={{ transition: 'all 1s', animationDelay: '1s' }}
            ref={ref3}>
            <Image src={Description} alt="설명" />
          </div>
        </div>
      </ContentsWrap>
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
`;

const LayoutComment2Wrap = styled.div`
  width: 100%;
  color: white;
  flex: 1 1 auto;
  font-weight: lighter;
  font-size: 26px;
  line-height: 34px;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  gap: 80px;
`;
