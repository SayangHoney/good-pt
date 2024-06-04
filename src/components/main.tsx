import styled from 'styled-components';
import Image from 'next/image';

import MainIPhone from '@/assets/main_iphone.png';

import Clock from '@/assets/clock.png';
import MegaPhone from '@/assets/megaPhone.png';
import Target from '@/assets/target.png';

export const MainComponent = () => {
  return (
    <MainWrap>
      <Image
        className="icon-motion clock"
        src={Clock}
        alt="Clock"
        style={{ position: 'absolute', top: 15, right: 250 }}
      />
      <Image
        className="icon-motion mega-phone"
        src={MegaPhone}
        alt="MegaPhone"
        style={{ position: 'absolute', top: 700, left: 250 }}
      />
      <Image
        className="icon-motion target"
        src={Target}
        alt="Target"
        style={{ position: 'absolute', bottom: -500, right: 350 }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <p className="text1 ">굿피티</p>
          <p className="text2">와 함께,</p>
        </div>
        <Image src={MainIPhone} alt="iphone" width={396} height={802} />
        <p className="text2 ">발표 능력 UP!</p>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  width: 100%;

  p {
    font-size: 70px;
    color: white;
    &.text1 {
      color: #1ac8ff;
      font-weight: 700;
    }
  }

  .icon-motion {
    position: 'absolute';
    /* top: 700;
    left: 250; */

    animation: motion 1s linear 0s infinite alternate;

    .mega-phone {
      @keyframes motion {
        0% {
          margin-top: 30px;
        }
        100% {
          margin-top: 0px;
        }
      }
    }
    .clock {
      @keyframes motion {
        0% {
          margin-top: 0px;
        }
        100% {
          margin-top: 30px;
        }
      }
    }
    .target {
      @keyframes motion {
        0% {
          margin-top: 0px;
        }
        100% {
          margin-top: 30px;
        }
      }
    }
  }
`;
