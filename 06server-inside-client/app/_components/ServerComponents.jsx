

export default function ServerComponents() {
    console.log("Server Component ........");
    const services=[
        "Web Development",
        "SEO Executive",
        "Digital Marketting",
        "App Development"
    ]


  return (
    <div>{services.map((item)=>(
        <h1 key={item}>{item}</h1>
    ))}</div>
  )
}

 