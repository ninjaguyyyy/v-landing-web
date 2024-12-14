const processItems = [
  {
    title: 'Nhận thông tin',
    content:
      'TKT tiếp nhận thông tin về nhu cầu của khách hàng 24/7/365. Thông qua hotline, zalo OA hoặc email',
  },
  {
    title: 'Khảo sát trực tiếp',
    content:
      'Nhân viên sẽ liên hệ với khách hàng có nhu cầu. Sau đó lên lịch về thời gian cụ thể để khảo sát thực tế khu vực cần thi công',
  },
  {
    title: 'Báo giá, soạn hợp đồng',
    content:
      'Sau khi nắm rõ thông tin về nhu cầu làm sạch của khách hàng. Chúng tôi sẽ gửi một bảng báo giá cuối cùng đến khách hàng',
  },
  {
    title: 'Tiến hành thực hiện dịch vụ',
    content:
      'Sau khi hợp đồng được ký kết. TKT sẽ bố trí nhân viên đến và thực hiện công việc như trong thoả thuận ban đầu',
  },
  {
    title: 'Kiểm tra sau thi công',
    content:
      'Khi hoàn thành các hạng mục công việc. Nhân viên giám sát tiến hành kiểm tra lại trước khi khách hàng nghiệm thu',
  },
  {
    title: 'Nghiệm thu và thanh toán',
    content:
      'Khách hàng sẽ được thông báo khi dịch vụ đã hoàn thành. Tiến hành kiểm tra chất lượng làm sạch và thanh toán phần phí dịch vụ',
  },
];
const ProcessItem = ({
  index,
  title,
  content,
}: {
  index: number;
  title: string;
  content: string;
}) => {
  return (
    <div className={`flex gap-x-2 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
    >
      <span><div className="w-[50px] h-[50px] rounded-[50%] bg-white text-[#004aad] flex items-center justify-center text-[30px] font-bold">{index}</div></span>
      <div>
        <div className="text-yellow-primary font-[18px]">{title}</div>
        <div className="text-[11px] text-white">{content}</div>
      </div>
    </div >
  );
};

export const Process = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d62f2] to-[#051f4d] md:absolute md:w-[1000px] flex md:flex-row flex-col gap-8 px-6 md:pl-10 md:pr-28 py-4 top-[228px] left-[30%] mt-6">
      <div className="text-white flex flex-col gap-y-4 w-[400px]">
        <div className="">
          Tại TKT, chúng tôi có
        </div>
        <div className="text-[32px]">
          Quy trình thực hiện
          <br />
          dịch vụ 6 bước
          <br />
          chuyên nghiệp
        </div>

        <div className="text-[11px]">
          Với hơn 15 năm kinh nghiệm trong lĩnh vực vệ sinh công nghiệp và kiểm
          soát dịch hại. Chúng tôi đã xây dựng một quy trình chuyên nghiệp 6
          bước
        </div>
        <div className="bg-yellow-primary rounded-3xl text-black w-fit p-2 text-[12px] font-bold">
          ĐẶT LỊCH KHẢO SÁT
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {processItems.map((item, index) => (
          <ProcessItem key={index} index={index + 1} {...item} />
        ))}
      </div>
    </div >
  );
};
