import { log } from "console";


export default async function Home({searchParams,params}) {
console.log("searchParams:",await searchParams);
console.log("params: ",await params);

  return (
   <>
   <h1>Home Page</h1>
   </>
  );
}
