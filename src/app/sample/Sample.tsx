import { memo } from 'react';
import styled from 'styled-components';

function Sample() {
  return (
    <SampleWrap>
      <p>하유민</p>
    </SampleWrap>
  );
}

export default memo(Sample);

const SampleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
