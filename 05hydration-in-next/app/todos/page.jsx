import { Suspense } from "react";

export default async function page() {
const apiResponse=await fetch('https://procodrr.vercel.app/?sleep=4000')
const res=await apiResponse.json()
console.log(res);


    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const data = await response.json()
    console.log(data);

    return (
        <div >
            <div>
                {/* <Suspense fallback={<div>Loading....</div>}>
                   {res.message}
                </Suspense> */}
                 {/* except wrapping in Suspense you will make simple loading component in same folder only and export */}
           <div>
            {res.message}
           </div>
            </div>
            {

            data.map(({ id, title, completed }) => (
                <div key={id} className="bg-amber-400">
                  
                    <input type="checkbox" checked={completed} readOnly />
                      <h1>{title}</h1>
                </div>



            ))
        }
        </div>
    )
}

