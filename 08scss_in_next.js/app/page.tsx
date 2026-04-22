
import './home.scss'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div className='w-[700px] h-[700px]'>
        <h1>Home Image</h1>
        {/* using simple image tag without optimization */}
        <img className='w-[300px] h-[200px]' src="/nature_img.jpg" alt="" />

        <Image src="/nature_img.jpg" 
        width={400} 
        height={300} 
        alt="Home Image nature view"
        quality={1} 
        />
      </div>
    </>
  );
}
