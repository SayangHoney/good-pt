import styled from 'styled-components';
import Image from 'next/image';

import MainIPhone from '@/assets/main_iphone.png';
import SamplePhone1 from '@/assets/app_sample_1.png';
import SamplePhone2 from '@/assets/app_sample_2.png';
import SamplePhone3 from '@/assets/app_sample_3.png';
import SamplePhone4 from '@/assets/app_sample_4.png';
import SamplePhone5 from '@/assets/app_sample_5.png';
import SamplePhone6 from '@/assets/app_sample_6.png';

import Clock from '@/assets/clock.png';
import MegaPhone from '@/assets/megaPhone.png';
import Target from '@/assets/target.png';

export const MainComponent = () => {
  return (
    <MainWrap>
      {/* <Image
        src={SamplePhone1}
        alt="samplePhone1"
        // width={244}
        style={{
          transform: 'rotate(-30deg)',
          borderRadius: '30px',
          position: 'absolute',
        }}
      /> */}
      {/* <Image
        src={SamplePhone2}
        alt="samplePhone2"
        style={{
          transform: 'rotate(15deg)',
          // position: 'absolute',
        }}
      /> */}
      {/* <Image
        src={SamplePhone3}
        alt="samplePhone3"
        style={{
          transform: 'rotate(-15deg)',
          // position: 'absolute',
        }}
      /> */}
      {/* <Image
        src={SamplePhone4}
        alt="samplePhone4"
        style={{
          transform: 'rotate(15deg)',
          // position: 'absolute',
        }}
      /> */}
      {/* <Image
        src={SamplePhone5}
        alt="samplePhone5"
        style={{
          transform: 'rotate(-15deg)',
          // position: 'absolute',
        }}
      /> */}
      {/* <Image
        src={SamplePhone6}
        alt="samplePhone6"
        style={{
          transform: 'rotate(30deg)',
          // position: 'absolute',
        }}
      /> */}

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
      {/* <Image
        className="icon-motion target"
        src={Target}
        alt="Target"
        style={{ position: 'absolute', bottom: -100, right: 500 }}
      /> */}

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
        <Image
          src={MainIPhone}
          alt="iphone"
          width={396}
          height={802}
          // style={{ position: 'absolute' }}
        />
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
    top: 700;
    left: 250;

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
  }
`;
