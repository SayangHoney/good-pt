import Image from 'next/image';
import styled from 'styled-components';
import LogoImage from '@/assets/logo.png';

// const logo = '@/assets/logo.png';

export const TopComponent = () => {
  return (
    <TopWrap>
      <div>
        <Image src={LogoImage} alt="logo" width={70} height={70} />
      </div>

      <MenuWrap>
        <div className="menu-item">Home</div>
        <div className="menu-item">Video</div>
        <div className="menu-item">Services</div>
      </MenuWrap>
    </TopWrap>
  );
};

const TopWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  position: fixed;
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  .menu-item {
    height: 50px;
    font-size: 20px;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
