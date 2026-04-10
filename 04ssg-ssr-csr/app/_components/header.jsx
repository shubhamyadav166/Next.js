
import Link from "next/link"
export default function Header() {
  return (
   <>
   <div className="flex flex-row gap-10">
    <ul><Link href="/">Home</Link></ul>
    <ul><Link href="/about">About</Link></ul>
    <ul><Link href="/blogs">Blogs </Link></ul>
    <ul><Link href="/services">Service</Link></ul>
   </div>
   </>
  )
}

 