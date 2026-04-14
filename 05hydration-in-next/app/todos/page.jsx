
export default async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const data = await response.json()
    console.log(data);

    return (
        <div >{

            data.map(({ id, title, completed }) => (
                <div key={id} className="bg-amber-400">
                  
                    <input type="checkbox" checked={completed} readOnly />
                      <h1>{title}</h1>
                </div>


            ))
        }
        </div>
    )
}

