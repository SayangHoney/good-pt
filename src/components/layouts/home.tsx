import Image from 'next/image';
import styled from 'styled-components';

import HomePicture from '@/assets/home/home.png';
import Description1 from '@/assets/home/description1.png';
import Description2 from '@/assets/home/description2.png';
import Description3 from '@/assets/home/description3.png';
import Description4 from '@/assets/home/description4.png';
import { MutableRefObject, forwardRef, useEffect, useRef } from 'react';

interface IProps {
  target2: MutableRefObject<any>;
  target2_1: MutableRefObject<any>;
  target2_2: MutableRefObject<any>;
  target2_3: MutableRefObject<any>;
  target2_4: MutableRefObject<any>;
}

export const Home = ({
  target2,
  target2_1,
  target2_2,
  target2_3,
  target2_4,
}: IProps) => {
  const titleRef = useRef<any>(null);
  const commetRef1 = useRef<any>(null);
  const commetRef2 = useRef<any>(null);

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

    if (commetRef1) {
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
      observer.observe(commetRef1.current as Element);
    }
  }, [commetRef1]);
  useEffect(() => {
    let observer: IntersectionObserver;

    if (commetRef2) {
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
      observer.observe(commetRef2.current as Element);
    }
  }, [commetRef2]);

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
          Home
        </TitleWrap>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <LayoutComment1Wrap ref={commetRef1}>
            <div>
              <p>
                <strong>향상된 발표능력</strong>을
              </p>
              <p>홈에서 한번에 확인해요.</p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap ref={commetRef2}>
            <p>
              발표 연습을 통해 학습한 결과를 바탕으로 성장 그래프를 보여줄게요!
              나날이 늘어나는 발표 실력을 보며 향상된 발표 능력을 확인해보세요
            </p>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      {/* contents */}
      <ContentsWrap>
        <DescriptionLeftWrap>
          <Image
            ref={target2_2}
            src={Description2}
            alt="설명_l1"
            style={{
              position: 'relative',
              top: '500px',
              right: '-50px',
              transition: 'all 1s',
              transform: 'translateY(-50px)',
              opacity: 0,
            }}
          />
          <Image
            ref={target2_3}
            src={Description3}
            alt="설명_l2"
            style={{
              position: 'relative',
              top: '900px',
              right: '-60px',
              transition: 'all 1s',
              transform: 'translateY(-50px)',
              opacity: 0,
            }}
          />
        </DescriptionLeftWrap>
        <Image
          src={HomePicture}
          alt="home"
          width={526}
          ref={target2}
          style={{
            transition: 'all 1s',
          }}
        />
        <DescriptionRightWrap>
          <Image
            ref={target2_1}
            src={Description1}
            alt="설명_r1"
            style={{
              position: 'relative',
              top: '300px',
              left: '-30px',
              transition: 'all 1s',
              transform: 'translateY(-50px)',
              opacity: 0,
            }}
          />
          <Image
            ref={target2_4}
            src={Description4}
            alt="설명_r2"
            style={{
              position: 'relative',
              top: '1300px',
              left: '-50px',
              transition: 'all 1s',
              transform: 'translateY(-50px)',
              opacity: 0,
            }}
          />
        </DescriptionRightWrap>
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
  opacity: 0;
  transition: 1s;
  transition-delay: 300ms;
`;

const LayoutComment2Wrap = styled.div`
  width: 100%;
  color: white;
  flex: 1 1 auto;
  font-weight: lighter;
  font-size: 26px;
  line-height: 34px;
  opacity: 0;
  transition: 1s;
  transition-delay: 300ms;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const DescriptionLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
`;

const DescriptionRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
