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
      <div className='text-red bg-yellow-400 leading-8 rounded px-3 bold text-[20px] font-bold'>Nhà sạch Long An </div>
      <div className="list-wrapper">
        <div className="flex-3">
          <h4 className="heading-title">NHA SACH LONG AN</h4>
          <ul className="list">
            <FooterItem
              icon={<HiHome />}
              text="Address: Số 5, trần thế sinh, TT Bến lức, huyện Bến lức, tỉnh Long An"
            />
            <FooterItem
              icon={<HiPhone />}
              text="Hotline: 0977678488"
            />
            <FooterItem icon={<HiMiniEnvelope />} text="2011hoanghuong@gmail.com" />
            <FooterItem
              icon={<HiGlobeAlt />}
              text="Website: https://www.nhasachlongan.com/"
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
      <div className="pt-4">©2020 Allrights reserved nhasachlongan.com</div>
    </div>
  );
}
