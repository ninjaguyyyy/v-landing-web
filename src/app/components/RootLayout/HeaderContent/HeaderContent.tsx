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
        defaultSelectedKeys={['2']}
        items={MENU}
        style={{ flex: 1, minWidth: 0 }}
        className={classes.menu}
      />

      <div className={'flex items-center relative'}>
        <Image
          src={Phone}
          alt={'contact'}
          className={'w-[40px] h-[36px] z-10 lg:h-[40px]}'}
        />
        <div
          className={
            'bg-lightblue h-[28px] lg:h-[36px] flex items-center rounded-[100px] px-3 text-base font-bold text-darkblue translate-x-[-10px]'
          }
        >
          09.38.17.22.94
        </div>
      </div>
    </>
  );
}
