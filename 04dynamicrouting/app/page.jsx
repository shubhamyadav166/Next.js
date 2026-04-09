import Test from './_components/test'
export default async function Home({params}) {

console.log("params: ",await params);


 return(
<>
<Test/>
<h1>This Is Home Page</h1>
</> 
)
}
 