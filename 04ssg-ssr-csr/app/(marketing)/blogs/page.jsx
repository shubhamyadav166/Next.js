
import Link from 'next/link';
export default function page() {

    const blogs= [
        {
            id: 1,
            title: "This is news related content",
            description: "Population of this country is increasing rapidaly"
        },
        {
            id: 2,
            title: "This is technology related content",
            description: "Technology in evolving rapidaly and new tech came like AI"
        },
        {
            id: 3,
            title: "This is medical related content",
            description: "Now days indians is cautious to take deciese"
        }
    ]
    return (
        <>
            <h1>Blogs Page</h1>
            <div>
                {blogs.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <h1>{blog.id}</h1>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                            <p>{blog.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

