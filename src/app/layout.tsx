import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import 'styles/global.scss';
import React from 'react';
import { RootLayout as RootLayoutComp } from './components/RootLayout';
import { montserrat } from 'app/fonts';
import Link from 'next/link';
import { Contact } from './components/Contact/Contact';

export const metadata: Metadata = {
  title: 'Nhà sạch Long An',
  description: 'Vệ sinh công nghiệp Sạch và Xanh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <RootLayoutComp>{children}</RootLayoutComp>
        <Contact />
      </body>
    </html>
  );
}
