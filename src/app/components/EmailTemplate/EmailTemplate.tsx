import * as React from 'react';
import { Customer } from 'type';

interface EmailTemplateProps {
  customer: Customer;
}

export const EmailTemplate = ({ customer }: EmailTemplateProps) => {
  const { fullName, address, phoneNumber, service } = customer;
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <div>
        <p>Full name: {fullName}</p>
        <p>Address: {address}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Service: {service}</p>
      </div>
    </div>
  );
};
