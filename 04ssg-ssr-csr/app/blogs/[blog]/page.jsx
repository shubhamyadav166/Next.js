

export function generateStaticParams(){
return [
  {blog:"1"},
  {blog:"2"},
  {blog:"3"},
  {blog:"4"},
  {blog:"5"},
]
}


export default async function page({params}) {

  const {blog}=await params
  
console.log(blog);

  return (
    <div>This is Blog no:  {blog}</div>
  )
}

