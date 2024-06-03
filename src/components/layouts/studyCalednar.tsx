import Image from 'next/image';
import { useEffect, useRef } from 'react';

import Phone from '@/assets/studyCalendar/phone.png';
import Content1 from '@/assets/studyCalendar/content1.png';
import Content2 from '@/assets/studyCalendar/content2.png';
import Description1 from '@/assets/studyCalendar/description1.png';
import Description2 from '@/assets/studyCalendar/description2.png';
import styled from 'styled-components';

export const StudyCalendar = () => {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const ref4 = useRef<any>(null);

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
        { threshold: 0.4 }
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
        { threshold: 0.4 }
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
        { threshold: 1 }
      );
      observer.observe(ref4.current as Element);
    }
  }, [ref4]);

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
                <strong>학습 일정</strong>을 기록하고
              </p>
              <p>
                <strong>맞춤 학습</strong>을 제공받아요.
              </p>
            </div>
          </LayoutComment1Wrap>
          <LayoutComment2Wrap>
            <p>
              캘린더를 통해 오늘 학습할 내용을 파악하고 이전에 했던 학습 기록을
              찾아볼 수 있어요.
            </p>
          </LayoutComment2Wrap>
        </div>
      </DescriptionWrap>

      {/* images */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'row',
          gap: '80px',
        }}>
        {/* 왼쪽 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* image */}
          <div
            ref={ref1}
            style={{
              transform: 'translateY(50px)',
              transition: 'all 1s',
            }}>
            <div
              style={{
                position: 'absolute',
                height: '1060px',
                width: '530px',
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 85%,rgba(0, 0, 0, 1) 97%)',
                zIndex: 1,
              }}
            />
            <Image
              src={Phone}
              alt="phone"
              height={1060}
              width={530}
              style={{
                zIndex: '0',
              }}
            />
          </div>

          {/* description */}
          <Description1Wrap ref={ref3}>
            <Image
              src={Description1}
              alt="description1"
              width={350}
              style={{
                transform: 'translateY(50px)',
                transition: 'all 1s',
              }}
            />
          </Description1Wrap>
        </div>

        {/* 오른쪽 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div
            ref={ref2}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              opacity: 0,
              marginTop: '50px',
              transition: 'all 1s',
              animationDelay: '1s',
              transform: 'translateY(50px)',
            }}>
            <Image src={Content1} alt="content1" width={550} />
            <Image
              src={Content2}
              alt="content2"
              width={380}
              style={{
                transition: 'all 1s',
                animationDelay: '1s',
              }}
            />
          </div>

          <Description2Wrap ref={ref4}>
            <Image
              src={Description2}
              alt="description2"
              width={230}
              style={{
                transform: 'translateY(50px)',
                transition: 'all 1s',
              }}
            />
          </Description2Wrap>
        </div>
      </div>
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1380px;
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

const Description1Wrap = styled.div`
  position: absolute;
  bottom: -140px;
  transform: translateY(50px);
  transition: all 1s;
  opacity: 0;
`;

const Description2Wrap = styled.div`
  position: absolute;
  bottom: -150px;
  transform: translateY(50px);
  transition: all 1s;
  opacity: 0;
`;
