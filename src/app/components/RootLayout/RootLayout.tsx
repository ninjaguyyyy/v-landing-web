'use client';
import { Layout, Menu } from 'antd';
import React from 'react';
import { HeaderContent } from './HeaderContent';
import { FooterContent } from './FooterContent';
import classes from './RootLayout.module.scss';

const { Header, Content, Footer } = Layout;

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className={classes.layout}>
      <Header className="header">
        <HeaderContent />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <main className={classes.main}>{children}</main>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent />
      </Footer>
    </Layout>
  );
}
