// second and third method to customize code 
async function fetchData(url){
 const response= await fetch(url)
 return await response.json()

}


export default async function page() {
  // first method to make code parallel
  //  const data=await Promise.all([
  //   fetch('https://procodrr.vercel.app/?sleep=2000'),
  //   fetch("https://jsonplaceholder.typicode.com/users?_limit=6"),
  //   fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
  //  ])   
  //  const fetchedData=await Promise.all(data.map((item)=>item.json()))
  //  const [data1,data2,data3]=fetchedData
  //  console.log(fetchedData);
   
   // Second method to code customization
  // const [res1,res2,res3]= await Promise.all([
  //   fetchData('https://procodrr.vercel.app/?sleep=2000'),
  //   fetchData('https://jsonplaceholder.typicode.com/users?_limit=6'),
  //   fetchData('https://jsonplaceholder.typicode.com/users?_limit=10')
  //  ])


  const urls= [
    'https://procodrr.vercel.app/?sleep=2000',
    'https://jsonplaceholder.typicode.com/users?_limit=6',
    'https://jsonplaceholder.typicode.com/users?_limit=10'
   ]

   const [res1,res2,res3]= await Promise.all(urls.map((url)=>fetchData(url)))

  return (
    <div>
      <h1>{res1.message}</h1>
      <div>
        {res2.map((item)=>(
          
        <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div>
        {res3.map((item)=>(
          
        <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

