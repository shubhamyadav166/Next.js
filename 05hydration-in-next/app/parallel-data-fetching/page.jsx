

export default async function page() {
   const data=await Promise.all([
    fetch('https://procodrr.vercel.app/?sleep=2000'),
    fetch("https://jsonplaceholder.typicode.com/users?_limit=6"),
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
   ])

  //  console.log(data);
   
   const fetchedData=await Promise.all(data.map((item)=>item.json()))
   const [data1,data2,data3]=fetchedData
   console.log(fetchedData);
   
  //  console.log(data1);
  //  console.log(data2);
  //  console.log(data3);
   
   
const url=['https://procodrr.vercel.app/?sleep=2000','https://jsonplaceholder.typicode.com/users?_limit=6','https://jsonplaceholder.typicode.com/users?_limit=10']


  return (
    <div>
      <h1>{data1.message}</h1>
      <div>
        {data2.map((item)=>(
          
        <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div>
        {data3.map((item)=>(
          
        <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

