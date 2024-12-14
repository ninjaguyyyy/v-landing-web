"use client"

import classes from './BannerContactForm.module.scss';
import classNames from 'classnames';
import { montserrat } from 'app/fonts';
import { useState } from 'react';
import { sendFormData, TrackingForm } from 'utils/formApi';

export function BannerContactForm() {

  interface FormData {
    name: string;
    phone: string;
    apartmentType: string;
    address: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    apartmentType: "",
    address: "",
  });

  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      form_config_id: '5f8947cdcf7c1706e949fd8a',
      ladi_form_id: 'FORM33',
      ladipage_id: '64180a35b5153b0068a06f75',
      tracking_form: [
        { name: 'url_page', value: 'https://vesinhcongnghiep.tktg.vn/' },
        { name: 'utm_source', value: '' },
        { name: 'utm_medium', value: '' },
        { name: 'utm_campaign', value: '' },
        { name: 'utm_term', value: '' },
        { name: 'utm_content', value: '' },
        { name: 'variant_url', value: '' },
        { name: 'variant_content', value: '' },
      ] as TrackingForm[],
      form_data: [
        { name: 'name', value: formData.name },
        { name: 'phone', value: formData.phone },
        { name: 'Loại căn hộ', value: formData.apartmentType },
        { name: 'Địa chỉ', value: formData.address },
      ],
      data_key: null,
      status_send: 2,
      merge_address: false,
      total_revenue: 0,
      time_zone: 7,
    };

    try {
      const data = await sendFormData(payload);
      setResponse(data);
      setError(null);
    } catch (err: any) {
      setResponse(null);
      setError(err.message);
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
        <input type="text" placeholder="Địa chỉ" className="input"
          name="address"
          value={formData.address}
          onChange={handleChange} />
        <input type="text" placeholder="Số điện thoại" className="input" id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange} />
        <select className="select" id="apartmentType"
          name="apartmentType"
          value={formData.apartmentType}
          onChange={handleChange}
          required
        >
          <option value="" selected>Chọn dịch vụ</option>
          <option value="general-cleaning">Tổng Vệ Sinh</option>
          <option value="glass-cleaning">Lau Kính Mặt Ngoài</option>
          <option value="carpet-cleaning">Vệ Sinh Ghế Thảm</option>
          <option value="polish-maintenance">Đánh Bóng, Bảo Dưỡng Sàn Đá</option>
          <option value="factory-cleaning">Vệ Sinh Nhà Máy, Kho, Xưởng</option>
          <option value="daily-cleaning">Tạp Vụ Vệ Sinh Hàng Ngày</option>
        </select>
        <button className="button" type="submit">Nhận báo giá</button>
      </div>
    </form>
  );
}
