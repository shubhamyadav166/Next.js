'use client'

export default function error({ error, reset }) {

    
  return (
    <div>
        <h1>Somthing Went Wronge: {error.message}</h1>
        <button onClick={()=>reset()} className="text-white bg-red-500 rounded">Try Again</button>
        </div>
  )
}

