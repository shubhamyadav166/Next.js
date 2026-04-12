
import Header from '../_components/header'
export default function Rootlayout({ children }) {
    return (
        <>
        <div>{<Header/>}</div>
            <div>{children}</div>
            <div>{}</div>
        </>
    )
}