'use client'

import ServerComponent from "./ServerComponent";

export default function ClientComponent({children}){
    console.log("This is Client component");
  
    
    return (
        
        <>
            
            <h1>Client Component</h1>
            {<ServerComponent/>}
        </>
        
    )
}