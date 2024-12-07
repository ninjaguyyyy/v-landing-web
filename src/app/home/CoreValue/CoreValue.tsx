import classes from './CoreValue.module.scss';
import { BoxItem } from 'app/home/CoreValue/BoxItem';
import CompanyImage from 'statics/images/company-image.jpg';
import BuildingBackground from 'statics/images/building-background.jpeg';
import Image from 'next/image';
import Button from 'app/components/Button/Button';
import { Service } from 'app/components/Service/Service';
import { serviceContent } from 'constants/service';

const contentMap = [
  { effectText: `Tổng</br>Vệ Sinh` },
  { effectText: 'Lau Kính</br>Trên Cao ' },
  { effectText: 'Vệ Sinh</br>Nội thức' },
  { effectText: 'Đánh bóng</br>Bảo trì' },
  { effectText: 'Vệ Sinh</br>Nhà Máy' },
  { effectText: 'Tạp vụ</br>Vệ Sinh' },
  {
    effectText: `<div style="font-size:35px;">Vệ Sinh Nhà<br>ở Trọn Gói</div>`,
  },
  {
    effectText: `<div style="font-size:30px;">Vệ Sinh Hàng</br>Ngày Toà Nhà</div>`,
  }
]




export function CoreValue() {
  return (
    <section className={classes.container}>
      <div className="wrapper">
        <BoxItem
          headingText="KINH NGHIỆM LÀM SẠCH"
          effectText="10 năm"
          endText="TRONG LĨNH VỰC VỆ SINH"
        />
        <BoxItem
          headingText="ÁP DỤNG CÔNG NGHỆ, KỸ THUẬT"
          effectText="XANH"
          endText="AN TOÀN VÀ THÂN THIỆN"
        />
        <BoxItem
          headingText="CAM KẾT MANG ĐẾN KHÁCH HÀNG"
          effectText="100%"
          endText="SỰ HÀI LÒNG VỀ DỊCH VỤ"
        />
        <BoxItem
          headingText="SỰ CHUYÊN NGHIỆP THỂ HIỆN QUA VIỆC"
          effectText="Đầu Tư"
          endText="VÀO CON NGƯỜI VÀ TRANG THIẾT BỊ"
        />
      </div>

      <p className="top-5">Vệ Sinh Công Nghiệp Top 5 tại Tp.HCM</p>
      <div className={classes['company-introduction-content']}>
        <div className="w-[663px]">
          <div className="text-yellow-primary text-h1">TKT COMPANY</div>
          <div className="text-h3">
            ĐƠN VỊ VỆ SINH ĐƯỢC YÊU MẾN HÀNG ĐẦU TẠI TP.HCM
          </div>
          <div className="text-h5 py-12 flex flex-col gap-y-4">
            <div>
              Chúng tôi là công ty dịch vụ chuyên nghiệp thành lập từ năm 2011
              và cung cấp dịch vụ chăm sóc tòa nhà, công trình, văn phòng hàng
              đầu tại TPHCM.
            </div>
            <div>
              Bằng cách cung cấp các giải pháp Trọn gói - Toàn Diện - Chuyên
              Nghiệp - Giá Tốt Nhất, TKT Company mong muốn mang đến sự Hài Lòng
              và Hiệu Quả nhất dành cho Khách Hàng. Cải tiến mỗi ngày để mang
              lại nhiều lợi ích hơn nữa cho mỗi khách hàng.
            </div>
          </div>

          <div className="text-yellow-primary text-h3">
            We care your space - We save your time.
          </div>
        </div>
        <div>
          <Image
            src={CompanyImage}
            alt="company image"
            className={classes['image']}
          />
        </div>
      </div>

      <div className='relative overflow-hidden' >
        <Image src={BuildingBackground} alt='building background' className='ml-[40%] overflow-hidden' />

        <div className='absolute inset-0 flex  items-center justify-center'>
          <div className='flex gap-x-8'>
            <div className={classes['content']}>
              <div className="bg-[#d2faf0] py-4 px-8 text-[24px]">TKT Company</div>
              <div className="px-8 flex flex-col gap-y-4 mt-4 text-[16px] b">
                <div className="w-full text-[20px]">
                  Chuyên gia làm sạch công nghiệp tại Tp.HCM
                </div>
                <div className='text-title font-normal'>Tại sao Khách hàng lựa chọn TKT?</div>
                <div>
                  TKT dẫn đầu lĩnh vực dịch vụ vệ sinh công nghiệp bằng việc hợp tác
                  với các chuyên gia, công ty làm sạch hàng đầu đến từ Mỹ, Nhật, Ý,
                </div>
                <div>
                  Chúng tôi luôn theo đuổi mục tiêu chất lượng cao, liên tục cải
                  thiện trong tất cả các khía cạnh dịch vụ{' '}
                  <span className="font-bold">theo chuẩn Quốc Tế ISO9001</span>. Đáp
                  ứng mọi yêu cầu với kết quả đặc biệt tốt.
                </div>
                <Button className='rounded'>
                  Liên hệ
                  <br />
                  09.38.17.22.94
                </Button>
              </div>

            </div>
            <div className={classes['right-content']}>
              {contentMap.map(({ effectText }, index) => (
                <BoxItem
                  key={index}
                  headingText='DỊCH VỤ'
                  effectText={effectText}
                  buttonText='Xem Ngay'
                  className={classes['box-custom']}
                />
              ))}
            </div>
          </div>

        </div>


      </div>
      <div>
        {serviceContent.map((item, index) => (
          <Service
            index={index}
            key={index}
            title={item.title}
            description={item.description}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
