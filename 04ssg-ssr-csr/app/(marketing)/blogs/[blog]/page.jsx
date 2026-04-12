export const revalidate=5;

//“Only allow the params that are returned by generateStaticParams().”
export const dynamicParams=false;
export async function generateStaticParams(){

  const response=await fetch('https://jsonplaceholder.typicode.com/todos')
  const result=await response.json()
  console.log(result);
  
return result.map((item)=>({ blog :`${item.id}`}))





//   return [
//   {blog:"1"},
//   {blog:"2"},
//   {blog:"3"},
//   {blog:"4"},
//   {blog:"5"},
// ]

}


export default async function page({params}) {

  const {blog}=await params
  console.log(new Date().toLocaleString()

);
  
  
console.log(blog);

  return (
    <div>This is Blog no:  {new Date().toLocaleString()}</div>
  )
}

