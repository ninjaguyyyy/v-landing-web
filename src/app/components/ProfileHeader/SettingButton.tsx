'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiCog6Tooth } from 'react-icons/hi2';

export default function SettingButton() {
  const pathname = usePathname();
  const parseUrl = pathname.split('/');
  parseUrl[parseUrl.length - 1] = 'management';
  const url = parseUrl.join('/');

  return (
    <Link
      href={url}
      className="!w-[58px] h-[48px] bg-dark hover:!bg-black flex items-center justify-center rounded-[10px]"
    >
      <HiCog6Tooth className="text-[24px] text-white" />
    </Link>
  );
}
