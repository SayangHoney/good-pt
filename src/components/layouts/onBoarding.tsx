import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import OnboardingImg from '@/assets/onbording/onbording_group.png';

export const Onboarding = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (ref) {
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

      observer.observe(ref.current as Element);
    }
  }, [ref]);

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
          Onboarding
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap>
            <div>
              <p>학습에 앞서, 고민을</p>
              <strong>분석하고 가이드를 제공해요.</strong>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap>
            <div>
              <p>
                온보딩을 통해 굿피티에 대해 알 수 있어요. 고민인 항목을 선택하고
              </p>
              <p>분석하여 적절한 학습 내용이 제공될 수 있도록 도와준답니다.</p>
            </div>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      {/* images */}
      <ContentWrap>
        <Image
          ref={ref}
          src={OnboardingImg}
          width={1386}
          alt="onbaording"
          style={{
            transform: 'translateY(-50px)',
            transition: 'all 1s',
            opacity: 0,
          }}
        />
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
