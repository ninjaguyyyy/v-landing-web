'use client';

import ProfileNavigatorItemComp from 'app/components/ProfileNavigator/ProfileNavigatorItemComp';
import { ProfileNavigatorItem } from 'constants/menu';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';
import { getLastPathComponent } from 'utils/url';

type Props = {
  items: ProfileNavigatorItem[];
  pathname: string;
};

export default function ProfileNavigator({ items, pathname }: Props) {
  const absolutePathname = usePathname();

  return (
    <div
      className={`${styles.container} w-full my-4 bg-white flex items-center gap-6 rounded-xl px-4 font-bold box-border`}
    >
      {items.map((item) => {
        const href = pathname + item.link;
        const active = getLastPathComponent(absolutePathname) === item.link;

        return (
          <ProfileNavigatorItemComp
            item={item}
            href={href}
            key={item.label}
            active={active}
          />
        );
      })}
    </div>
  );
}
