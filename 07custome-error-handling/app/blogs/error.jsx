'use client'
import { useRouter } from 'next/navigation'
import { startTransition } from "react"

export default function error({ error, reset }) {
    const router = useRouter()

    return (
        <div>
            <h1>Somthing Went Wronge: {error.message}</h1>

            <button onClick={() => {
                startTransition(() => {
                    router.refresh()
                    reset()
                })

            }
            } className="text-white bg-red-500 rounded">Try Again</button>
        </div>
    )
}

