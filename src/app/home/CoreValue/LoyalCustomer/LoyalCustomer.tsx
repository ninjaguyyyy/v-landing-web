import classes from './LoyalCustomer.module.scss';
import LoyalCustomerImage from 'statics/images/loyal-customer1.gif';
import Image from 'next/image';
import { YoutubeEmbed } from 'app/components/YoutubeEmbed/YoutubeEmbed';
import { MenuKey } from 'constants/menu';

export const LoyaltyCustomer = () => {
  const lisVideos = [
    'ssPMAqH2_kI',
    'Agsrpfsg5iA',
    'y4mjCKBAm-s',
    '201HkTIYrYw',
    '4t0XtUksiB0',
    '0GChmgRXdiw',
  ];
  return (
    <div className={classes['container']} id={MenuKey.VIDEO}>
      <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
      <div className={classes['content']}>
        <div className="text-blue-primary text-[35px] text-center font-bold">
          Khách hàng thân thiết
          <br />
          của chúng tôi
        </div>
        <Image
          src={LoyalCustomerImage}
          alt="loyal-customer"
          className="w-4/5 h-auto"
        />

        <div className="grid  md:grid-cols-2 gap-4 m-4">
          {lisVideos.map((videoId, index) => (
            <YoutubeEmbed videoId={videoId} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
