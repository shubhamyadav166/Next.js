'use client'
import { useModel } from './ThemeChanger'
import { useEffect } from 'react'

function ThemeButton() {
  const { isdark, setIsdark } = useModel()


useEffect(()=>{
  setIsdark(localStorage.getItem("theme")||"light")
},[])

  useEffect(() => {
    if (isdark == "dark") {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [isdark])
  

  function handleChange(e) {
    setIsdark(e.target.value)
  }

  return (
    <div>
      <select className='text-white bg-blue-400' onChange={handleChange} >
        <option value="">theme</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  )
}

export default ThemeButton