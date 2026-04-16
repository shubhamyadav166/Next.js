import { Suspense } from "react"
import SlowComponent from "../_components/SlowComponent"
import SlowComponent2 from "../_components/SlowComponent2"
import SlowComponent3 from "../_components/SlowComponent3"


function data() {
  return (
    <div>
        {/* first component */}
<Suspense fallback={<div>Loading... Slow Component</div>}>
<SlowComponent/>

{/* Third Component */}
</Suspense>
<Suspense fallback={<div>Loading... Slow Component 2 ...</div>}>
<SlowComponent2/>
</Suspense>
{/* Stream Data with slowComponent3 */}
<Suspense fallback={<div>Loading... Slow Component 3 ...</div>}>
<SlowComponent3/>
</Suspense>

    </div>
  )
}

export default data