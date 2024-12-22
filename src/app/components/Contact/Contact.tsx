import Link from 'next/link';

export const Contact = () => {
  return (
    <div className="fixed bottom-[50px] right-[15px] z-[100]">
      <Link href="tel:0977678488">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
            fill="#000"
          >
            <image
              href="https://w.ladicdn.com/ladiui/icons/social/whatsapp.svg"
              height="32"
              width="32"
            ></image>
          </svg>
        </div>
      </Link>
      <Link
        href="https://zaloapp.com/qr/p/jjytcrsgwt70"
        target="_blank"
        data-replace-href="https://zaloapp.com/qr/p/jjytcrsgwt70"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
            fill="#000"
          >
            <image
              href="https://w.ladicdn.com/ladiui/icons/social/zalo.svg"
              height="32"
              width="32"
            ></image>
          </svg>
        </div>
      </Link>
      <Link
        href="https://www.facebook.com/share/1MyWgpUFNd/?mibextid=LQQJ4d"
        target="_blank"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
            fill="#000"
          >
            <image
              href="https://w.ladicdn.com/ladiui/icons/social/messenger.svg"
              height="32"
              width="32"
            ></image>
          </svg>
        </div>
      </Link>
    </div>
  );
};
