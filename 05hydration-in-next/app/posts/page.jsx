
'use client'
import { useEffect, useState } from "react";
export default function page() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMethod() {
            try {
               const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
               const data=await response.json()
               if(!response.ok){
                throw new Error(`Somthing went wrong in fetch method:${response.status}`)
               }
            setData(data) 
            } catch (error) {
                console.log("Fetch post failed : ",error);
                
            }
            
        }
        fetchMethod();

    }, [])

console.log(data);

    return (
        <div className="grid grid-cols-3 gap-5">
            {data.map((item) => (

                <div key={item.id} className="flex flex-col gap-2 bg-slate-500 text-white items-center rounded shadow-2xl">
               <h1>{item.title}</h1>
               <p>{item.completed}</p>
                </div>
            ))}
        </div>
    )
}