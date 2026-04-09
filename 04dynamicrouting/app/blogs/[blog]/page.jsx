import { notFound } from 'next/navigation'
export async function generateMetadata({ params }) {
  const { blog } = await params
  console.log(await params);

  return {
    title: `${blog}`
  }


}

export default async function page({ params }) {
  const { blog } = await params
  let Test = /^\d+$/.test(blog)
   console.log(Test);

  if (!Test) {
    notFound()
  }

  return (
    <div>daynamic page : {blog}</div>
  )
}

