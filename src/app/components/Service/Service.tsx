import React from 'react'
import Button from '../Button/Button';
import Image, { StaticImageData } from 'next/image';
import { TickIcon } from 'statics/svg/TickIcon';


import classes from './Service.module.scss';

type Content = {
  title: string | React.ReactNode;
  description?: string | string[];
}

type ServiceProps = {
  title: string | React.ReactNode;
  description: React.ReactNode;
  content: Content[];
  image: StaticImageData;
}


export const Service1 = ({ title, description, content, image }: ServiceProps) => {
  return (
    <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 items-center justify-center '>
      <Image src={image} alt='image' className='w-full md:w-1/2 h-fit block md:hidden' />
      <div className='flex flex-col gap-y-5 w-full md:w-1/2 px-4' >
        <div className='text-h5 mb-3'>DỊCH VỤ</div>
        <div className='text-title font-normal text-[35px] md:text-[50px]'>{title}</div>
        <div>{description}</div>
        {content.map((item, index) =>
        (
          <div key={index}>
            <div className='flex gap-x-1'>
              <TickIcon startColor='rgb(0, 70, 223)' endColor='rgb(9, 226, 181)' />
              <div className='font-bold'>{item.title}</div>
            </div>

            <div className='flex flex-col gap-y-1 pl-6'>{Array.isArray(item.description) ? item.description.map((desc, idx) => (<div key={idx}>{desc}</div>)) : item.description}</div>
          </div>
        ))}
        <div className='mx-auto'>
          <Button className='rounded'>
            Liên hệ
            <br />
            09.77.67.84.88
          </Button>
        </div>


      </div>
      <Image src={image} alt='image' className='w-full md:w-1/2 h-fit hidden md:block' />

    </div>

  )
}

export const Service2 = ({ title, description, content, image }: ServiceProps) => {
  return (
    <div className='flex flex-col md:flex-row text-white items-center' >
      <Image src={image} alt='image' className='w-full md:w-1/2 h-fit' />
      <div className='flex flex-col w-full md:w-1/2 gap-y-5' >
        <div className="bg-gradient-primary flex flex-col gap-y-5 p-5">
          <div className='text-h5'>DỊCH VỤ</div>
          <div className='font-normal  text-white md:text-[50px] text-[35px] '>{title}</div>
          <div className="description">{description}</div>
          {content.map((item, index) =>
          (
            <div key={index}>
              <div className='flex gap-x-1'>
                <span>
                  <TickIcon startColor='rgb(255, 255, 255)' endColor="rgb(255, 255, 255)" />
                </span>
                <div className='font-bold'>{item.title}</div>
              </div>

              {item.description && <div className='flex flex-col gap-y-1 list-none pl-6'>{Array.isArray(item.description) ? item.description.map((desc, idx) => (<div key={idx}>{desc}</div>)) : item.description}</div>}
            </div>
          ))}
        </div>

        <div className='mx-auto'>
          <Button className='rounded'>
            Liên hệ
            <br />
            09.77.67.84.88
          </Button>
        </div>
      </div>
    </div>

  )
}


export const Service = ({ index, ...props }: ServiceProps & { index: number }) => {

  return (
    <div className=' md:px-10'>
      {index % 2 === 0 ? <Service1 {...props} /> : <Service2 {...props} />}
    </div>
  )
}
