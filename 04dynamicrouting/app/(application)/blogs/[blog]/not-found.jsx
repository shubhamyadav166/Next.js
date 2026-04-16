'use client'
import { usePathname } from "next/navigation"


export default function notfound() {
    const {blog}=usePathname()
    console.log(blog);
    
    return (
        <div className="h-[93vh] flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl  font-semibold">{blog} : Page Not Found!</h1>
            <p className="text-xl">Could not found the page you are looking for .</p>
        </div>
    )
}

