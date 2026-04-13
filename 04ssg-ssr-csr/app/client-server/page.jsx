'use client'

import { useState } from "react";

export default function page() {
  const [count,setCount]=useState(0)
  //  if(window==undefined){
  //   console.log(window);
  //  }
  // if(typeof localStorage!=="undefined"){
  // console.log(localStorage);
  // }

  if (typeof localStorage !== "undefined") {
    console.log(localStorage);
  }

  if (typeof window !== "undefined") {
    console.log(window);
  }
  console.log("Like Component");
  console.log("Follow Page");
//Button Click count Increase
const handleClick=()=>{
  setCount(count+1)
}
  return (
    <div>
      <h1>Client Server Page</h1>
      <button
        onClick={handleClick}
      >Follow  {count}  {String(console.log("running on server"))}
       </button>

    </div>

  )
}
