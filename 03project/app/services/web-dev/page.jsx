import Link from "next/link";

export default function WebDev(){
    return (
        <div>
            <h1>Web dev page </h1>
            <p><Link href="/">Home </Link></p>
           <p><Link href="/services/seo">Seo  </Link></p> 
        </div>
    )
}