import classes from './HightlightService.module.scss';
import highlightService1 from 'statics/images/highlight-service1.jpg';
import highlightService2 from 'statics/images/highlight-service2.jpg';
import highlightService3 from 'statics/images/highlight-service3.jpg';
import Image from 'next/image';
import Button from 'app/components/Button/Button';


const serviceList = [
  { title: "Dịch Vụ Giặt Thảm", price: "6,000 / m²", button: "Ưu đãi tại đây" },
  { title: "Dịch Vụ Giặt Ghế", price: "14,000 / cái", button: "Ưu đãi tại đây" },
  { title: "Kiểm Soát Côn Trùng", price: "1,000 / m²", button: "Ưu đãi tại đây" },
  { title: "Mái Sàn Bê Tông", price: "120,000 / m²", button: "Ưu đãi tại đây" },
  { title: "Dịch Vụ Lau Kính", price: "12,000 / m²", button: "Ưu đãi tại đây" },
]

const ServiceItem = ({ title, price, button, index }: { title: string, price: string, button: string, index: number }) => {
  return (
    <div className={`flex gap-x-2 ${index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'} md:w-[695px] `} >
      <div>
        <div className='px-8 py-4 text-white bg-[#051f4d] font-[20px] rounded-r-2xl w-[300px] '>{title}</div>
        <div className='mx-6 py-4 flex flex-col gap-y-2 text-center justify-center'>
          <div className='text-blue-primary text-[18px]'>Rẻ nhất chỉ từ</div>
          <div className='title highlight text-[30px] font-bold'>{price}</div>
          <div className='flex justify-center'>
            <Button className={classes['button']}>{button}</Button>
          </div>
        </div>
      </div>

      <div className='relative mt-7 mx-10'>
        <div className='w-8 h-8 border-[6px] border-solid border-[#f2430d] rounded-[50%] absolute left-1/2 transform -translate-x-1/2  -translate-y-full '></div>

        <div className='h-full  border-t-[1px] border-solid border  absolute'></div>

      </div>


    </div >
  )
}

const ImageItem = () => {
  return (<div className='md:relative flex flex-col items-center justify-center mx-auto'>
    <Image src={highlightService1} alt='highlight service' className='w-4/5 h-auto ' />
    <div className='flex gap-x-2 justify-center items-center mt-2'>
      <Image src={highlightService2} alt='highlight service' className='w-2/5 h-auto ' />
      <Image src={highlightService3} alt='highlight service' className='w-2/5 h-auto ' />
    </div>
  </div>
  )
}

export const HightlightService = () => {
  return (
    <>   <div className='flex flex-col md:flex-row justify-center mt-10 md:relative'>
      <div className='md:absolute md:top-[10%] md:left-[50%] flex items-center justify-center md:hidden'>
        <ImageItem />
      </div>
      <div className={classes['content']}>
        <div className="text-[18px] font-bold ">
          CÙNG TKTCOMPANY KHÁM PHÁ
        </div>
        <div className="text-[#051f4d] text-[30px] font-bold">DỊCH VỤ NỔI BẬT</div>
        <div className="text-yellow-primary text-[25px] font-bold">CÓ THỂ BẠN QUAN TÂM</div>
        <div className="text-[11px] font-thin">Chúng tôi là công ty dịch vụ chuyên nghiệp thành lập từ năm 2011 và cung cấp dịch vụ chăm sóc tòa nhà, công trình, văn phòng hàng đầu tại TPHCM.
        </div>
        <div className="text-[11px] font-thin">
          Với đa dạng các gói dịch vụ và chuyên môn làm sạch. Chúng tôi luôn muốn tạo ra cơ hội gắn bó lâu dài với khách hàng bằng những ưu đãi hấp dẫn về mức giá.
        </div>
      </div>
      <div className='w-1/5 h-[500px] bg-gradient-to-r from-[#0d62f2] to-[#051f4d] hidden md:block '></div>
      <div className='md:absolute md:top-[10%] md:left-[50%] md:flex items-center justify-center hidden'>
        <ImageItem />
      </div>
    </div>
      <div className='flex flex-col justify-center items-center py-8'>
        {serviceList.map((service, index) => (
          <ServiceItem key={index} {...service} index={index} />)
        )}
      </div>

    </>


  )
}