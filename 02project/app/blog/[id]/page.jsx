export default async function page({params}){
const {id}=await params
console.log(id);

    return(
        <>
        <h1>This is slug page :{id}</h1>
        </>
    )
}