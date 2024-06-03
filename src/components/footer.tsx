import Image from 'next/image';
import styled from 'styled-components';

import LogoIcon from '@/assets/logo.png';
import AppStore from '@/assets/app_store_icon.png';
import GooglePlay from '@/assets/google_play_icon.png';

export const Footer = () => {
  return (
    <FooterWrap>
      <Image src={LogoIcon} alt="logo_icon" width={150} height={150} />

      <DownloadIconWrap>
        <Image
          className="icon_button"
          src={AppStore}
          alt="app_store_icon"
          width={158}
          height={44}
          onClick={() => {
            alert('준비중입니다.');
          }}
        />
        <Image
          className="icon_button"
          src={GooglePlay}
          alt="google_play_icon"
          width={158}
          height={44}
          onClick={() => {
            alert('준비중입니다.');
          }}
        />
      </DownloadIconWrap>

      <SitemapWrap>
        <div>이용약관</div>
        <div>보호정책</div>
        <div>운영정책</div>
        <div>공지사항</div>
        <div>신고안내</div>
        <div>고객센터</div>
      </SitemapWrap>

      <CopyrightWrap>© 2024. GoodPT. All rights reserved.</CopyrightWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  height: 400px;
  width: 100%;
  background: #1e1e1e;
  padding: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadIconWrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .icon_button {
    &:hover {
      cursor: pointer;
    }
  }
`;

const SitemapWrap = styled.div`
  margin-top: 100px;
  padding: 20px 240px;
  display: flex;
  flex-direction: row;
  gap: 80px;
  border-bottom: 1px solid #7d7d7d;
  color: #7d7d7d;
  font-weight: 400;

  div {
    &:hover {
      cursor: pointer;
      font-weight: 600;
    }
  }
`;

const CopyrightWrap = styled.div`
  width: 540px;
  height: 66px;
  font-size: 18px;
  line-height: auto;
  font-weight: 400;
  color: #7d7d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
