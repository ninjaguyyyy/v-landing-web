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
    <div className='flex gap-x-10 ml-20 3xl:mx-auto gap-y-10 '>
      <div className='w-[600px] flex flex-col gap-y-5 pt-24' >
        <div className='text-h5 mb-3'>DỊCH VỤ</div>
        <div className='text-title font-normal text-[50px]'>{title}</div>
        <div>{description}</div>
        {content.map((item, index) =>
        (
          <div key={index}>
            <div className='flex gap-x-1'>
              <TickIcon startColor='rgb(0, 70, 223)' endColor='rgb(9, 226, 181)' />
              <div className='font-bold'>{item.title}</div>
            </div>

            <ul className='flex flex-col gap-y-1'>{Array.isArray(item.description) ? item.description.map((desc, idx) => (<li key={idx}>{desc}</li>)) : item.description}</ul>
          </div>
        ))}
        <div className='mx-auto'>
          <Button className='rounded'>
            Liên hệ
            <br />
            09.38.17.22.94
          </Button>
        </div>


      </div>
      <div className="right-content">
        <Image src={image} alt='image' className='w-[780px] h-[800px]' />
      </div>
    </div>

  )
}

export const Service2 = ({ title, description, content, image }: ServiceProps) => {
  return (
    <div className='flex text-white'>
      <div >
        <Image src={image} alt='image' className='w-[780px] h-[800px]' />
      </div>
      <div className='w-[500px] flex flex-col gap-y-5 pt-24' >
        <div className="bg-gradient-primary pl-10 flex flex-col gap-y-5 py-5">
          <div className='text-h5'>DỊCH VỤ</div>
          <div className='font-normal text-[50px]'>{title}</div>
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

              {item.description && <ul className='flex flex-col gap-y-1'>{Array.isArray(item.description) ? item.description.map((desc, idx) => (<li key={idx}>{desc}</li>)) : item.description}</ul>}
            </div>
          ))}
        </div>

        <div className='mx-auto'>
          <Button className='rounded'>
            Liên hệ
            <br />
            09.38.17.22.94
          </Button>
        </div>
      </div>
    </div>

  )
}


export const Service = ({ index, ...props }: ServiceProps & { index: number }) => {

  return (
    <>
      {index % 2 === 0 ? <Service1 {...props} /> : <Service2 {...props} />}
    </>
  )
}
