import Image, { StaticImageData } from 'next/image';
import classes from './Banner.module.scss';
import BannerBgImage from 'statics/images/banner-bg.webp';

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: string;
};

export function Banner({ image, title, subTitle }: Props) {
  return (
    <section className={`${classes.banner}`}>
      <Image
        alt="banner-bg"
        src={BannerBgImage}
        placeholder="blur"
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
        className="rounded-xl"
      />
      <Image src={image} alt="shop" className="h-full w-auto" />

      <div className="ml-3 pt-1 text-white pr-6">
        <p className="font-bold text-2xl sm:text-3xl !mt-2 mb-0">{title}</p>
        <p className="!mt-0 font-medium text-xs sm:text-base">{subTitle}</p>
      </div>
    </section>
  );
}
