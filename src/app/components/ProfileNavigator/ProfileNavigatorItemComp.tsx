import { ProfileNavigatorItem } from 'constants/menu';
import Link from 'next/link';

type Props = {
  item: ProfileNavigatorItem;
  href: string;
  active: boolean;
};

export default function ProfileNavigatorItemComp({
  item,
  href,
  active = false,
}: Props) {
  return (
    <Link
      href={href}
      className={`${
        active ? 'active' : ''
      } py-3 px-4 flex flex-col items-center`}
    >
      <item.icon className="text-3xl text-dark" />
      <span className="text-dark">{item.label}</span>
    </Link>
  );
}
