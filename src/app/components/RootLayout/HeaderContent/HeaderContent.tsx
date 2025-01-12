import { Menu } from 'antd';
import React from 'react';
import Image from 'next/image';
import Logo from 'statics/images/logo.png';
import Phone from 'statics/images/phone.svg';
import classes from './HeaderContent.module.scss';
import { MENU } from 'constants/menu';

export function HeaderContent() {
  function handleClickMenu(e: any) {
    console.log('click', e);
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrollToTop = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <Image src={Logo} alt={'logo'} className={classes.logo} onClick={scrollToTop} />
      <Menu
        theme="dark"
        mode="horizontal"
        items={MENU}
        className={classes.menu}
        onClick={handleClickMenu}
      />

      <div className={classes['phone-group']}>
        <Image src={Phone} alt="contact" />
        <div className="phone-no">09.38.17.22.94</div>
      </div>
    </>
  );
}
