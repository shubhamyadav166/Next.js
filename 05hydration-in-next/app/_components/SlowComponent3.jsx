

async function SlowComponent3() {

   await new Promise((resolve)=>setTimeout((resolve)=>resolve,5000))
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
    const data = await response.json()
    console.log(data);
    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h1>{item.id}. {item.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default SlowComponent3