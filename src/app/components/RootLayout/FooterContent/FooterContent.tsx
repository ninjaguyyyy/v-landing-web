import Image from 'next/image';
import Logo from 'statics/images/logo.png';
import React from 'react';
import { FooterItem } from './FooterItem';
import {
  HiHome,
  HiPhone,
  HiMiniEnvelope,
  HiGlobeAlt,
  HiChatBubbleBottomCenterText,
  HiLockClosed,
} from 'react-icons/hi2';
import classes from './FooterContent.module.scss';

export function FooterContent() {
  return (
    <div className={classes.container}>
      <Image src={Logo} alt="logo" className="logo" />
      <div className="list-wrapper">
        <div className="flex-3">
          <h4 className="heading-title">TKT COMPANY</h4>
          <ul className="list">
            <FooterItem
              icon={<HiHome />}
              text="Address: 161 Ung Van Khiem, ward 25, Binh Thanh district, HCMC"
            />
            <FooterItem
              icon={<HiPhone />}
              text="Hotline: 028.66.830.930 - 0938.17.22.94"
            />
            <FooterItem icon={<HiMiniEnvelope />} text="Email: info@tktg.vn" />
            <FooterItem
              icon={<HiGlobeAlt />}
              text="Website: https://tktg.vn/"
            />
          </ul>
        </div>
        <div className="flex-2">
          <h4 className="heading-title">Dịch vụ khách hàng</h4>
          <ul className="list">
            <FooterItem
              icon={<HiLockClosed />}
              text="Chính sách bảo mật thông tin"
            />
            <FooterItem
              icon={<HiChatBubbleBottomCenterText />}
              text="Liên hệ chúng tôi"
            />
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="pt-4">©2020 Allrights reserved tktg.vn</div>
    </div>
  );
}
