


export default async function page({params}) {
// console.log(await params);
const {blog}=await params
if(Number(blog%2===0)){
    throw new Error("Even Page Can't be seen")
}
// second approach to handle error 

// const value=Math.random()
// console.log(value);

// if(value>0.5){
//     throw new Error("This is the error page ")
// }
   
  return (
    <div>Indivisual Blog Page:{blog} </div>
  )
}
