import Image from 'next/image';

import Ball from 'statics/images/ball.png';

type Props = {
  width?: number;
};

export default function Logo({ width = 150 }: Props) {
  return <Image alt="logo" src={Ball} width={width} />;
}
