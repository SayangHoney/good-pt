import styled from 'styled-components';

export const Services = () => {
  const Squire = ({ className }: { className?: string }) => {
    return <SquireWrap className={className} />;
  };
  return (
    <ServicesWrap>
      <QuestionWrap>
        <div className="title">
          <p className="q">어떤 서비스가 있을까요?</p>
        </div>

        <div className="comment1">
          <p>
            <strong>실질적인 발표능력</strong>을 향상
          </p>
          <p>시켜줄 학습을 소개할게요!</p>
        </div>

        <div className="comment2">
          <p>굿피티는 세 가지의 주요 서비스를 제공합니다.</p>
        </div>
      </QuestionWrap>

      <MethodsWrap>
        <Squire />
        <Squire />
        <Squire />
      </MethodsWrap>
    </ServicesWrap>
  );
};

const ServicesWrap = styled.div`
  padding-top: 200px;
  width: 100%;
  height: fit-content;
  background: #f1faff;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const QuestionWrap = styled.div`
  .title {
    display: flex;
    justify-content: center;
    .q {
      font-weight: 900;
      font-size: 38px;
      line-height: 90px;
      color: #2b73ff;
    }
  }

  .comment1 {
    margin-top: 150px;
    font-size: 60px;
    line-height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comment2 {
    margin-top: 100px;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MethodsWrap = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

const SquireWrap = styled.div`
  width: 395px;
  height: 395px;
  background-image: linear-gradient(-29deg, #2b73ff, #3bd0ff);
  border-radius: 60px;
  animation: fadein 2s, moveup 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveup {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
