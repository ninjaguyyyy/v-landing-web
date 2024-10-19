type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={className}>
      Ant Design ©{new Date().getFullYear()} Created by Chi Nguyen
    </footer>
  );
}
