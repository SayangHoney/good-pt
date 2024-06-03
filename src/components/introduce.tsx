import styled from 'styled-components';

import { useIntroduce } from './introduce.hook';
import { Home } from './layouts/home';
import { Learning } from './layouts/learning';
import { StudyCalendar } from './layouts/studyCalednar';
import { AiSummary } from './layouts/aiSummary';
import { Posting } from './layouts/posting';
import { Onboarding } from './layouts/onBoarding';

export const Intorduce = () => {
  const { target2, target2_1, target2_2, target2_3, target2_4 } =
    useIntroduce();

  return (
    <IntroduceWrap>
      <Onboarding />
      {/* <Layout
        title="Onbording"
        Comment1={
          <div>
            <p>학습에 앞서, 고민을</p>
            <strong>분석하고 가이드를 제공해요.</strong>
          </div>
        }
        Comment2={
          <div>
            <p>
              온보딩을 통해 굿피티에 대해 알 수 있어요. 고민인 항목을 선택하고
            </p>
            <p>분석하여 적절한 학습 내용이 제공될 수 있도록 도와준답니다.</p>
          </div>
        }
        Images={
          <Image
            ref={target1}
            src={Onbording}
            alt="onbording1"
            style={{
              width: '1386px',
              opacity: 0,
              transform: 'translateY(100px)',
              transition: 'all 1s',
            }}
          />
        }
      /> */}

      <Home
        target2={target2}
        target2_1={target2_1}
        target2_2={target2_2}
        target2_3={target2_3}
        target2_4={target2_4}
      />

      <Learning />

      <StudyCalendar />

      <AiSummary />

      <Posting />
    </IntroduceWrap>
  );
};

const IntroduceWrap = styled.div`
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  margin: 0 0 auto;
`;

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 230px;
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
