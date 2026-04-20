export const dynamic = 'force-dynamic'
export default function page() {

    const value=Math.random()
    console.log(value);
    
    if(value>.5){
        throw  Error("Error Occurred")
    }

  return (
    <div>Client Side Error Page</div>
  )
}
