import { ACTION_BUILDING_INDICATOR_HIDE } from "next/dist/next-devtools/dev-overlay/shared";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <p><Link href="/services/web-dev">Web-Dev page</Link></p>
   <p><Link href="/services/seo">Seo page</Link></p>
  
    
    </>
  );
}
