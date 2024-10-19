import Avatar from 'app/components/Avatar';
import Image from 'next/image';

import TeamImg from 'statics/images/profile-header.jpeg';

export default function TeamProfileHeader() {
  return (
    <div className="profile-header">
      <Image
        className="w-full object-cover rounded-tl-lg"
        height={70}
        src={TeamImg}
        alt="header-cover"
      />
      <div className="w-full box-border flex flex-col items-center gap-2 translate-y-[-50px]">
        <Avatar width={84} className="!p-1.5" />
        <span className="block text-sm font-bold">Barcelona</span>
      </div>
    </div>
  );
}
