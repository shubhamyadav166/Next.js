

export default async function page({params}) {
  const {blog}=await params 
  return (
    <div>Dynamic Blog Page : {blog}</div>
  )
}

