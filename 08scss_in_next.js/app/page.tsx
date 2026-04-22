
import './home.scss'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div className='w-[700px] h-[700px]'>
        <h1>Home Image</h1>
        {/* using simple image tag without optimization */}
        <img className='w-[700px] ' src="/nature_img.jpg" alt="" />

        <Image src="/nature_img.jpg" 
        width={700} 
        height={475} 
        alt="Home Image nature view"
        quality={1} 
        // unoptimized
        />
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
        width={700} 
        height={475} 
        alt="camera Image nature view"
        quality={75} 
        // unoptimized
        />
      </div>
    </>
  );
}
