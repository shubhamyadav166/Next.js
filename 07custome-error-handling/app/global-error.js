'use client'

import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { startTransition } from "react"
import { useRouter } from "next/navigation"
export default function GlobalError({ error, reset }) {
  const router=useRouter()
  return (
    <html>
      <body>
        <h1>Global Crash</h1>
        <p>{error.message}</p>

    
            <button onClick={() => {
                startTransition(() => {
                    router.refresh()
                    reset()
                })

            }
            } className="text-white bg-red-500 rounded">Try Again</button>
      </body>
    </html>
  )
}