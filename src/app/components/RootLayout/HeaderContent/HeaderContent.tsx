import { Menu } from 'antd';
import React from 'react';
import Image from 'next/image';
import Logo from 'statics/images/logo.png';
import Phone from 'statics/images/phone.svg';
import classes from './HeaderContent.module.scss';
import { MENU } from 'constants/menu';

export function HeaderContent() {
  return (
    <>
      <Image src={Logo} alt={'logo'} className={classes.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        items={MENU}
        className={classes.menu}
      />

      <div className={classes['phone-group']}>
        <Image src={Phone} alt="contact" />
        <div className="phone-no">09.38.17.22.94</div>
      </div>
    </>
  );
}
