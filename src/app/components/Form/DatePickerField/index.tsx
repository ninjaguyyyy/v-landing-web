import { DatePicker } from 'antd';

type Props = {
  className?: string;
};

export default function DatePickerField({ className }: Props) {
  return (
    <DatePicker
      className={`${className} w-full px-[18px] py-[10px] rounded-xl`}
    />
  );
}
