import React from 'react';
import { FloatButton } from 'antd';
import ZaloImg from 'statics/images/zalo.svg';
import MessengerImg from 'statics/images/messenger.svg';
import WhatsAppImg from 'statics/images/whatsapp.svg';
import Image from 'next/image';
import classes from './ContactFloatButton.module.scss';

export function ContactFloatButtons() {
  return (
    <FloatButton.Group
      shape="circle"
      style={{ insetInlineEnd: 34 }}
      className={classes.container}
    >
      <FloatButton
        icon={<Image src={WhatsAppImg} alt="zalo" width={50} height={50} />}
        className="w-[60px] h-[60px] shadow-none !bg-transparent !mb-0"
      />
      <FloatButton
        icon={<Image src={MessengerImg} alt="zalo" width={50} height={50} />}
        className="w-[60px] h-[60px] shadow-none !bg-transparent !mb-0"
      />
      <FloatButton
        icon={<Image src={ZaloImg} alt="zalo" width={50} height={50} />}
        className="w-[60px] h-[60px] shadow-none !bg-transparent !mb-0"
      />
    </FloatButton.Group>
  );
}
