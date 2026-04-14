'use client'

export default function Home() {
if(typeof window!=="undefined"){

  
  return <div>This is Server side rendering</div>
}


  return (
    <>
    <div>This is Server side rendering</div>
    </>
  );
}
