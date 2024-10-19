import Avatar from 'app/components/Avatar';
import SettingButton from 'app/components/ProfileHeader/SettingButton';
import Image from 'next/image';

import TeamImg from 'statics/images/profile-header.jpeg';

export default function ProfileHeader() {
  return (
    <div className="w-full bg-white rounded-xl">
      <Image
        className="w-full object-cover rounded-t-xl"
        height={300}
        src={TeamImg}
        alt="header-cover"
      />
      <div className="h-[125px] w-full px-8 box-border flex justify-between items-center">
        {/* Team Avatar */}
        <div className="flex items-center gap-6 translate-y-[-40px]">
          <Avatar />
          <span className="text-2xl font-bold">Barcelona</span>
        </div>

        {/* Team Stats */}
        <div></div>

        {/* Settings */}
        <div>
          <SettingButton />
        </div>
      </div>
    </div>
  );
}
