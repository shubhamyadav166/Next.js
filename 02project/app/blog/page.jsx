import Link from 'next/link'
export default function Page(){

    const post=[
        {
          id:1,
          title:"Blog 1",
          body:"This is first blog"
        },
        {
          id:2,
          title:"Blog 2",
          body:"This is second blog"
        },
        {
          id:3,
          title:"Blog 3",
          body:"This is third blog"
        },
]
return(
    <>
    <div>
        <h1>Post of this Blog page</h1>

        <div >
            {
                post.map((item)=>(
                    <div key={item.id}> 
                    <Link href={`/blog/${item.id}`}>{item.body}</Link>
                    <h1>title of this page :{item.title}</h1>
                    
                    </div>
                ))
            }
        </div>
    </div>
    </>
);
}



