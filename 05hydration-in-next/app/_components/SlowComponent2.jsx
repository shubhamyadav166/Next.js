

async function SlowComponent2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=6")
    const data = await response.json()
    // console.log(data);
    return (
        <div >{data.map((item) => (
            <div key={item.id}>
            <h1>{item.name}</h1>
            </div>
        ))}</div>
    )
}

export default SlowComponent2