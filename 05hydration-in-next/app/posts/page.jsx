
'use client'
import { useEffect, useState } from "react";
export default function page() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMethod() {
            try {
               const response = await fetch("https://jsonplaceholder.typicode.com/post?_limit=5")
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
        <div>
            {data.map((item) => (

                <div key={item.id}>
                    {item.id}. &nbsp;{item.title}
                </div>
            ))}
        </div>
    )
}