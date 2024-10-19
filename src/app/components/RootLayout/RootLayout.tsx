'use client';
import { Layout, Menu } from 'antd';
import React from 'react';
import { HeaderContent } from './HeaderContent';
import { FooterContent } from './FooterContent';
import classes from './RootLayout.module.scss';
import classNames from 'classnames';
import { montserrat } from 'app/fonts';

const { Header, Content, Footer } = Layout;

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className={classNames(classes.layout, montserrat.className)}>
      <Header className="header">
        <HeaderContent />
      </Header>
      <Content>
        <main className={classes.main}>{children}</main>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent />
      </Footer>
    </Layout>
  );
}
