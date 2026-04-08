export async function generateMetadata({params}){
  const {blog}=await params
  console.log(await params);
  
  return {
    title:`${blog}`
  }
  
  
}

export default async function page({params}) {
    const {blog}=await params
  return (
    <div>daynamic page : {blog}</div>
  )
}

