import React from 'react'

async function page({params}) {
    const {blog}=await params
  return (
    <div>daynamic page : {blog}</div>
  )
}

export default page