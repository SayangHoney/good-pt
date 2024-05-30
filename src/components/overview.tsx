import styled from 'styled-components';

export const Overview = () => {
  return (
    <OverviewWrap>
      <span className="title">Overview</span>
      <div className="comment_1">
        <span>갑작스러운 발표에</span>
        <span>
          <strong>당황했던 경험</strong>이 있나요?
        </span>
      </div>
      <div className="comment_2">
        <span>
          굿피티는 효과적인 발표를 위한 발표능력 향상 도우미 앱 서비스입니다.
        </span>
        <span>즉흥발표 연습부터 맞춤 연습까지 굿피티와 함께하세요!</span>
      </div>
    </OverviewWrap>
  );
};
const OverviewWrap = styled.span`
  color: white;
  height: fit-content;
  width: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    &.title {
      font-size: 44px;
      font-weight: 900;
      color: #2b73ff;
      margin-bottom: 80px;
    }
  }
  .comment_1 {
    font-size: 60px;
    line-height: 90px;
    margin-bottom: 80px;
  }
  .comment_2 {
    font-size: 32px;
    line-height: 48px;
  }
`;
