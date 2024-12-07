import classes from './BannerContactForm.module.scss';
import classNames from 'classnames';
import { montserrat } from 'app/fonts';

export function BannerContactForm() {
  return (
    <form className={classNames(classes.form, montserrat.className)}>
      <div className="banner-header">
        <h1 className="text-title">Tư vấn</h1>
        <p className="subTitle">MIỄN PHÍ 24/7/365</p>
      </div>
      <div className="wrapper">
        <input type="text" placeholder="Họ và tên" className="input" />
        <input type="text" placeholder="Địa chỉ" className="input" />
        <input type="text" placeholder="Số điện thoại" className="input" />
        <select className="select">
          <option value="">Chọn dịch vụ</option>
          <option value="service1">Dịch vụ 1</option>
          <option value="service2">Dịch vụ 2</option>
        </select>
        <button className="button">Nhận báo giá</button>
      </div>
    </form>
  );
}
