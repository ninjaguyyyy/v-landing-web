'use client';

import classes from './BannerContactForm.module.scss';
import classNames from 'classnames';
import { montserrat } from 'app/fonts';
import React from 'react';
import { Button } from 'antd';

export function BannerContactForm() {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const values = {
      fullName: formData.get('fullName') as string,
      address: formData.get('address') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      service: formData.get('service') as string,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      // todo: show popup alert

      formRef?.current?.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className={classNames(classes.form, montserrat.className)}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="banner-header">
        <h1 className="title">Tư vấn</h1>
        <p className="subTitle">MIỄN PHÍ 24/7/365</p>
      </div>
      <div className="wrapper">
        <input
          type="text"
          name="fullName"
          placeholder="Họ và tên"
          className="input"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Địa chỉ"
          className="input"
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Số điện thoại"
          className="input"
          required
        />
        <select name="service" className="select" required>
          <option value="">Chọn dịch vụ</option>
          <option value="service1">Dịch vụ 1</option>
          <option value="service2">Dịch vụ 2</option>
        </select>
        {/*<button className="button" type="submit">*/}
        {/*  Nhận báo giá*/}
        {/*</button>*/}

        <Button className="button" loading={isSubmitting} htmlType="submit">
          Nhận báo giá
        </Button>
      </div>
    </form>
  );
}
