


export default async function page({params}) {
console.log(await params);
const {blog}=await params
if(Number(blog%2===0)){
    throw new Error("Even Page Can't be seen")
}
   
  return (
    <div>Indivisual Blog Page: {blog}</div>
  )
}
