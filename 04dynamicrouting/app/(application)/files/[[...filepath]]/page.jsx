export default async function filepath({params}){
    const {filepath}=await params;
    console.log(await params);
    
    return (
        <div>
            {/* <h1>File page all catch dynamic route:- {filepath.join("/")}   </h1> */}
            <h1>File page all catch dynamic route:- {filepath}</h1>
        </div>
    )
}