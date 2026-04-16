  async function page({params}){
   
  console.log(await params);
  const {likes}=await params
    
  return (
    <div>Like Page: {likes}</div>
  )
}

export default page