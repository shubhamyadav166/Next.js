import {cookies} from 'next/headers'
//   // Force fully make page dynamic
// export const dynamic="force-dynamic"


export default async function page() {
//  const search=await searchParams
//   console.log(search);

  

// my Cookies also make page dynamic

 const mycookie=await cookies()
console.log(mycookie);

  console.log("This is service page");
  
  return (
    <div>
      <h1>Services Page</h1> 
      <h2>We work in different field</h2>
      <p>Web development</p>
      <p>SEO</p>
      <p>Landing Page</p>
      </div>
  )
}

 