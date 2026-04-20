'use client'

import { useEffect } from "react";

export default function page() {
useEffect(()=>{
    const value=Math.random()
    console.log(value);
    
    if(value>.5){
        throw  Error("Error Occurred")
    }
},[])
  return (
    <div>Client Side Error Page</div>
  )
}
