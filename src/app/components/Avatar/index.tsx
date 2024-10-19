import Image from 'next/image';

import AvatarImg from 'statics/images/avatar.jpeg';
import { ExtendableComponentProps } from '../../../type';

type Props = ExtendableComponentProps<'div'> & {
  width?: number;
};

export default function Avatar({ width = 140, className }: Props) {
  return (
    <Image
      className={`${className} rounded-full bg-white`}
      style={{ width: width, height: width }}
      src={AvatarImg}
      alt="avatar-img"
    />
  );
}
