import React from 'react';

type Props = {
  text: string;
  icon: React.ReactNode;
};

export function FooterItem({ icon, text }: Props) {
  return (
    <li className={'flex items-center gap-3'}>
      <span>{icon}</span>
      <span>{text}</span>
    </li>
  );
}
