'use client'

import { useState } from "react"

export default function Button() {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={(prev)=> setCount(prev+1)}> Button</button> 
      {count}
        </div>
  )
}

