'use client'

export default function Home() {
// if(typeof window!=="undefined"){

  
//   return <div>This is Server side rendering.</div>
// }


  return (
    <>
    {/* <div>This is Server side rendering {Math.random()}</div> */}
    {/* <div>This is Server side rendering {Date.now()}</div> */}
    {/* Here is no error when condition is always same  */}
    <div className="bg-blue-600">This is Server side rendering {Date.now()?"5":"10"}</div>
    </>
  );
}
