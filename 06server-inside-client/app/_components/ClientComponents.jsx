
'use client'

import ServerComponents from "./ServerComponents"

export default function ClienComponents({children}) {
    console.log("Client Component");
    
  return (
    <div>
      <div>this is client component where you will see the data</div>
        <h1>{children}</h1>
    </div>
  )
}

