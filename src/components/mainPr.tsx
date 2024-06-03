import styled from 'styled-components';

export const MainPr = () => {
  const CommentComponent = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
        }}>
        <div
          style={{
            position: 'relative',
            top: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div style={{ fontSize: '64px', lineHeight: '90px' }}>
            굿피티와 함께,
          </div>
          <div
            style={{ fontSize: '64px', fontWeight: 700, lineHeight: '90px' }}>
            발표를 더욱 쉽고 효과적으로!
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            top: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div style={{ fontSize: '32px', lineHeight: '48px' }}>
            발음 교정, 발성 연습, 말하기 속도 조절까지
          </div>
          <div style={{ fontSize: '32px', lineHeight: '48px' }}>
            발표에 필요한 모든 학습을 도와줄게요!
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          marginTop: '500px',
          height: '847px',
          overflow: 'hidden',
        }}>
        <EclipseWrap>
          <CommentComponent />
        </EclipseWrap>
      </div>

      <GradiantWrap className="gradiant" />
    </div>
  );
};

const EclipseWrap = styled.div`
  width: 100%;
  border-radius: 100%;
  background-image: linear-gradient(#c4c3ff 50%, black);
  background-color: #c4c3ff;
  overflow: hidden;
  height: 1694px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GradiantWrap = styled.div`
  height: 850px;
  width: 100%;
  background-image: linear-gradient(#c4c3ff 40%, black);
  position: relative;
`;
