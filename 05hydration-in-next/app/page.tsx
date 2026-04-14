'use client'

export default function Home() {
if(typeof window!=="undefined"){

  
  return <div>This is Server side rendering</div>
}


  return (
    <>
    <h1>This is Server page which server render that is called Server Side Rendering</h1>
    </>
  );
}
