
import Header from '../_components/header'
export default function Rootlayout({ children }) {
    return (
        <>
        <div className='flex justify-center w-full'>
           <div>
            <div className=' bg-blue-400 text-white w-full'>{<Header/>}</div>
           
            <div>{children}</div>
           </div>
            </div>
        </>
    )
}