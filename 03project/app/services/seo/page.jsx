import Link from "next/link";

export default function SEO(){
    return(
        <div>
            <h1>SEO Page</h1>
           <p><Link href="/">Home page</Link></p> 
           <p><Link href="/services/web-dev">Web dev Page</Link></p> 
        </div>
    )
}