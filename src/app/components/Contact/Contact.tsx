import Link from "next/link"

export const Contact = () => {
  return (
    <div className='fixed bottom-0 right-0 transform -translate-y-1/2 z-100'>
      <Link
        href="tel:0938172294"
      >
        <div >
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
        href="https://zalo.me/2441599563987709272"
        target="_blank"
        data-replace-href="https://zalo.me/2441599563987709272"
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
        href="https://m.me/congtyvesinhtphcm"
        target="_blank"
        data-replace-href="https://m.me/congtyvesinhtphcm"
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
    </div>)
}