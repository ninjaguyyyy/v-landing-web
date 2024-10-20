import classes from './CoreValue.module.scss';
import { BoxItem } from 'app/home/CoreValue/BoxItem';

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
    </section>
  );
}
