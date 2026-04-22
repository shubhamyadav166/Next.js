'use client'
import style from './home.module.css'
import { useState } from "react";

export default function page() {
  const [fruit,setFruit]=useState(["Mango,Banana"])

  return (
    <div>
        <h1>This is About Page</h1>
      
      <div>
        {fruit.map((item)=>(
          <p className={style.title} key={item}>{item}</p>
        ))}
      </div>
        <button onClick={()=>{
          setFruit(null)
          
        }}>
            Click Me
            </button> 


    </div>
  )
}

