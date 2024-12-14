import * as React from 'react';
import { Customer } from 'type';

interface EmailTemplateProps {
  customer: Customer;
}

export const EmailTemplate = ({ customer }: EmailTemplateProps) => {
  const { fullName, address, phoneNumber, service } = customer;
  return (
    <div>
      <h1>Yêu cầu gửi báo giá</h1>
      <div>
        <p>Họ và tên: {fullName}</p>
        <p>Địa chỉ: {address}</p>
        <p>Số điện thoại: {phoneNumber}</p>
        <p>Dịch vụ: {service}</p>
      </div>
    </div>
  );
};
