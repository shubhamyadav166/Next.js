'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const Context=createContext()
export default function ThemeChanger({children}) {
const [isdark,setIsdark]=useState()


  return (
    <Context.Provider value={{isdark,setIsdark}}>{children}</Context.Provider>
  )
}
export const useModel=()=>useContext(Context)

