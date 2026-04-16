

async function page({params}) {
  console.log(await params);
  const {comments}=await params
  return (
    <div>Comment Page:- {comments}</div>
  )
}

export default page