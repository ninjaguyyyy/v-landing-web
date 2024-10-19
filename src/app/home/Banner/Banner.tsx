import classes from './Banner.module.scss';
import BannerBg from 'statics/images/banner_bg.jpg';
import Image from 'next/image';
import { BannerTitle } from './BannerTitle';
import { BannerContactForm } from './BannerContactForm';

export function Banner() {
  return (
    <section className={classes.banner}>
      <div className="left">
        <BannerTitle />
      </div>

      <div className="right">
        <div className="overlay"></div>
        <Image src={BannerBg} alt="banner-bg" fill />
        <BannerTitle className="lg:hidden pt-10" />
      </div>

      <div className="form">
        <BannerContactForm />
      </div>
    </section>
  );
}
