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
          Posting
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap>
            <div>
              <p>
                <strong>발표에 도움</strong>이 되는 팁과
              </p>
              <p>정보를 얻을 수 있어요.</p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap>
            <p>
              포스팅은 발표에 대한 다양한 정보를 제공해요. 발표에 도움이 되는
              글부터 영상 등 여러 콘텐츠를 통해 발표에 자신감을 더해줄거에요!
            </p>
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
