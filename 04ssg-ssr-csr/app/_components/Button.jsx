'use client'

import { useState } from "react"

export default function Button() {
    const [count,setCount]=useState(0)
    console.log("Button clicked");
    
  return (
    <div>
      <button onClick={(prev)=> setCount(prev=>prev+1)}> Button</button> 
      {count}
        </div>
  )
}

