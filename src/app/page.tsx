import { Banner } from 'app/home/Banner';
import { CoreValue } from 'app/home/CoreValue';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[url('../statics/images/container-background.jpg')] relative" >
      <Banner />
      <CoreValue />
    </div >
  );
}
