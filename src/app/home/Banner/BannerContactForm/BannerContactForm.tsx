"use client"

import classes from './BannerContactForm.module.scss';
import classNames from 'classnames';
import { montserrat } from 'app/fonts';
import { useState } from 'react';
import { sendFormData } from 'utils/formApi';
import Loading from 'app/components/Loading/Loading';

export function BannerContactForm() {

  interface FormData {
    fullName: string;
    phoneNumber: string;
    service: string;
    address: string;
  }
  const initialFormData = {
    fullName: "",
    phoneNumber: "",
    service: "",
    address: "",
  }

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await sendFormData(formData);
      setResponse(data);
      setFormData(initialFormData);
      setError(null);
    } catch (err: any) {
      setResponse(null);
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <form className={classNames(classes.form, montserrat.className)} onSubmit={handleSubmit}>
      <div className="banner-header">
        <h1 className="text-title">Tư vấn</h1>
        <p className="subTitle">MIỄN PHÍ 24/7/365</p>
      </div>
      <div className="wrapper">
        <input type="text" placeholder="Họ và tên" className="input" id="name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required />
        <input type="text" placeholder="Địa chỉ" className="input"
          name="address"
          value={formData.address}
          onChange={handleChange} />
        <input type="text" placeholder="Số điện thoại" className="input" id="phone"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange} />
        <select className="select" id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" selected>Chọn dịch vụ</option>
          <option value="Tổng Vệ Sinh">Tổng Vệ Sinh</option>
          <option value="Lau Kính Mặt Ngoài">Lau Kính Mặt Ngoài</option>
          <option value="Vệ Sinh Ghế Thảm">Vệ Sinh Ghế Thảm</option>
          <option value="Đánh Bóng, Bảo Dưỡng Sàn Đá">Đánh Bóng, Bảo Dưỡng Sàn Đá</option>
          <option value="Vệ Sinh Nhà Máy, Kho, Xưởn">Vệ Sinh Nhà Máy, Kho, Xưởng</option>
          <option value="Tạp Vụ Vệ Sinh Hàng Ngày">Tạp Vụ Vệ Sinh Hàng Ngày</option>
        </select>
        <button className="button" type="submit">Nhận báo giá</button>
      </div>
      {loading && <Loading message="Đang gửi mail ..." />}
    </form>
  );
}
