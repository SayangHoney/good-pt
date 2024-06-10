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
