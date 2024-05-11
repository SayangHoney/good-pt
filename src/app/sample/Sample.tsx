'use client';

import styled from 'styled-components';

export const Sample = () => {
  return (
    <SampleWrap>
      <p>하유민 바보</p>
    </SampleWrap>
  );
};

const SampleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
