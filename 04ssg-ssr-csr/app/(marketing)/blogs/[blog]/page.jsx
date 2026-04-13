import { Suspense } from 'react';
import Comments from '../../../_components/Comments'
import Like from '../../../_components/Like'
import Views from '../../../_components/Views'
import Loading from '../../../_components/Loading';
// Incremental Site Regeneration
// export const revalidate = 5;




//“Only allow the params that are returned by generateStaticParams().”
// export const dynamicParams = false;
// this code is for SSG
// export async function generateStaticParams(){

//   const response=await fetch('https://jsonplaceholder.typicode.com/todos')
//   const result=await response.json()
//   console.lo g(result);

// return result.map((item)=>({ blog :`${item.id}`}))

// //   return [
// //   {blog:"1"},
// //   {blog:"2"},
// //   {blog:"3"},
// //   {blog:"4"},
// //   {blog:"5"},
// // ]

// }


export default async function page({ params }) {

  const { blog } = await params
  // console.log(new Date().toLocaleString());


  console.log(blog);

  return (
    <div className='flex justify-center mt-10'>

      <div>
        <h1>This is Blog no:{blog} </h1>
        <Suspense fallback={<Loading children={"Views"}/>}> <Views /> </Suspense>

        <Suspense fallback={<Loading>Comments.....</Loading>}> <Comments /></Suspense>

        <Suspense fallback={<Loading> Likes....</Loading>}><Like /></Suspense>
      </div>

    </div>
  )
}

