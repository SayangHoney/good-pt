import Image from 'next/image';
import styled from 'styled-components';

import HomePicture from '@/assets/home/home.png';
import PointLineR from '@/assets/point_line_to_right.png';
import PointLineL from '@/assets/point_line_to_left.png';
import Description3 from '@/assets/home/description3.png';
import Description4 from '@/assets/home/description4.png';
import { MutableRefObject, forwardRef } from 'react';

interface IProps {
  target2: MutableRefObject<any>;
  target2_1: MutableRefObject<any>;
  target2_2: MutableRefObject<any>;
  target2_3: MutableRefObject<any>;
  target2_4: MutableRefObject<any>;
}

export const Home = forwardRef(
  ({ target2, target2_1, target2_2, target2_3, target2_4 }: IProps) => {
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
            Home
          </TitleWrap>

          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <LayoutComment1Wrap>
              <div>
                <p>
                  <strong>향상된 발표능력</strong>을
                </p>
                <p>홈에서 한번에 확인해요.</p>
              </div>
            </LayoutComment1Wrap>
            <LayoutComment2Wrap>
              <p>
                발표 연습을 통해 학습한 결과를 바탕으로 성장 그래프를
                보여줄게요! 나날이 늘어나는 발표 실력을 보며 향상된 발표 능력을
                확인해보세요
              </p>
            </LayoutComment2Wrap>
          </div>
        </DescriptionWrap>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Image
            src={HomePicture}
            alt="home"
            width={526}
            ref={target2}
            style={{
              transition: 'all 1s',
            }}
          />

          <Description1Wrap ref={target2_1}>
            <Image src={PointLineR} alt="설명R" style={{ marginTop: '8px' }} />

            <div className="text">
              <div className="title">내 계정 및 학습 현황 확인</div>
              <div className="contents">
                프로필 등록 및 내 계정 설정을 할 수 있으며, 전체 학습 시간, 학습
                레벨, 내가 말한 문장을 확인할 수 있어요.
              </div>
            </div>
          </Description1Wrap>
          <Description2Wrap ref={target2_2}>
            <div className="text">
              <div className="title">월별 발표 개선 현황 확인</div>
              <div className="contents">
                월별로 목표 점수에 현재 얼마나 도달했는지 그래프와 함께
                확인해요.
              </div>
            </div>

            <Image src={PointLineL} alt="설명L" style={{ marginTop: '8px' }} />
          </Description2Wrap>
          <Description3Wrap ref={target2_3}>
            <Image src={Description3} alt="설명3" />
          </Description3Wrap>
          <Description4Wrap ref={target2_4}>
            <Image src={Description4} alt="설명4" />
          </Description4Wrap>
        </div>
      </LayoutWrap>
    );
  }
);

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

const Description1Wrap = styled.div`
  right: 0px;
  top: 200px;
  display: flex;
  flex-direction: row;
  position: absolute;
  gap: 20px;
  width: 500px;
  height: fit-content;
  transform: translateY(50px);
  transition: all 1s;

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-size: 22px;
      color: #1ac8ff;
      font-weight: bold;
      line-height: auto;
    }

    .contents {
      font-size: 18px;
      line-height: 28px;
      color: #d9d9d9;
    }
  }
`;

const Description2Wrap = styled.div`
  left: 100px;
  top: 500px;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 400px;
  height: fit-content;
  transform: translateY(50px);
  transition: all 1s;
  opacity: 0;

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-size: 22px;
      color: #1ac8ff;
      font-weight: bold;
      line-height: auto;
    }
    .contents {
      font-size: 18px;
      line-height: 28px;
      color: #d9d9d9;
    }
  }
`;

const Description3Wrap = styled.div`
  position: absolute;
  left: 150px;
  top: 1100px;
  transform: translateY(50px);
  transition: all 1s;
  opacity: 0;
`;

const Description4Wrap = styled.div`
  position: absolute;
  right: 100px;
  top: 1400px;
  transform: translateY(50px);
  transition: all 1s;
  opacity: 0;
`;
