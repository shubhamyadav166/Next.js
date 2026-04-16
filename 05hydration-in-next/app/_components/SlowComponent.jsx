

async function SlowComponent() {
    
const apiResponse=await fetch('https://procodrr.vercel.app/?sleep=4000')
const res=await apiResponse.json()
// console.log(res);
  return (
    <div>{res.message}</div>
  )
}

export default SlowComponent