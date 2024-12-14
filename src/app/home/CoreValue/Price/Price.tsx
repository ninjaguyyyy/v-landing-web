"use client"
import PriceImage from 'statics/images/price.png';
import classes from './Price.module.scss';
import Image from 'next/image';
import { StarIcon } from 'statics/svg/StartIcon';
import { useState } from 'react';
import { sendFormData } from 'utils/formApi';
import { FormData } from 'utils/formApi';
import { Fondamento } from 'next/font/google';




export const Price = () => {

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
      form_config_id: "639c43bbef42240012d7a203",
      ladi_form_id: "FORM409",
      ladipage_id: "64180a35b5153b0068a06f75",
      tracking_form: [
        { name: "url_page", value: "https://vesinhcongnghiep.tktg.vn/" },
        { name: "utm_source", value: "" },
        { name: "utm_medium", value: "" },
        { name: "utm_campaign", value: "" },
        { name: "utm_term", value: "" },
        { name: "utm_content", value: "" },
        { name: "variant_url", value: "" },
        { name: "variant_content", value: "" },
      ],
      form_data: [
        { name: "name", value: formData.name },
        { name: "phone", value: formData.phone },
        { name: "Địa chỉ", value: formData.address },
        { name: " Nội dung", value: formData.apartmentType },
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
    <div>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className="text-[#292966] text-[40px] my-10">
          Bảng Giá Tham Khảo
        </div>
        <Image src={PriceImage} alt="price" className='w-2/3 h-auto' />
      </div >
      <div className='w-full md:w-2/3 mx-auto mt-10 flex md:flex-row flex-col gap-x-10 '>
        <div className='bg-gradient-to-r from-[#0d62f2] to-[#051f4d] p-8 w-full md:w-2/5 my-10 rounded-xl'>
          <div className='text-white text-bold text-[20px] mb-4 text-center'>LIÊN HỆ NGAY ĐỂ <br />ĐẶT LỊCH KHẢO SÁT</div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-y-2'>
              <input placeholder='Họ và tên' className={classes['input']} id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input name="phone" type="tel" placeholder="Số điện thoại" pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}" className={classes['input']} id="phone"
                value={formData.phone}
                onChange={handleChange} />
              <input type="text" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className={classes['input']} name="address" />
              <input type="text" placeholder="Chi tiết nhu cầu dịch vụ" value={formData.apartmentType} onChange={handleChange} name="apartmentType" className={classes['input']}></input>
            </div>
            <button className='text-[#292966] bg-[#b0edff] py-3 px-6 mt-4 rounded-lg border-none' type="submit">
              NHẬN BÁO GIÁ VÀ TƯ VẤN
            </button>
          </form>

        </div>
        <div className='w-full md:w-3/5 flex flex-col gap-y-8 px-10'>
          <div className='font-thin text-[20px]'>Nhận báo giá Online</div>
          <div className='text-[#051f4d] text-[35px] font-bold '>Hãy trở thành một trong hàng nghìn</div>
          <div className='text-yellow-primary text-[35px] font-bold'>khách hàng hạnh phúc của chúng tôi</div>
          <div className='text-[#051f4d]'>Vui lòng Điền thông tin bên dưới, chúng tôi sẽ gửi báo giá qua Email cho bạn ngay lập tức.</div>
          <div className='flex gap-x-10 text-[#051f4d]'>
            <div className={classes['icon-container']}>
              <div className={classes['star-icon']}>
                <StarIcon className="text-yellow-primary" />
              </div>
              <div className='text-[20px] font-bold'>Giảm giá 5%</div> <div>Sử dụng lần đầu</div>
            </div>
            <div className={classes['icon-container']}>
              <div className={classes['star-icon']}>
                <StarIcon className='top-[22.891px] absolute left-[34.129px] w-12 h-12' />
                <StarIcon className='top-[15.891px] absolute left-[6.129px] w-12 h-12' />
              </div>
              <div className='text-[20px] font-bold'>Giảm giá 7%</div> <div>Sử dụng lần 2</div>
            </div>
            <div className={classes['icon-container']}>
              <div className={classes['star-icon']}>
                <StarIcon className='top-[22.891px] absolute left-[34.129px] w-12 h-12' />
                <StarIcon className='top-[10.891px] absolute left-[16.129px] w-12 h-12' />
                <StarIcon className='top-[22.891px] absolute left-[6.129px] w-12 h-12' />
              </div>
              <div className='text-[20px] font-bold'>Giảm giá 10%</div> <div>Sử dụng lần 3</div>
            </div>
          </div>
        </div>

      </div>

    </div >

  );
};