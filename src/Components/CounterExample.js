import React, { useState } from "react"

function CounterExample() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                {/* () => is a listener. So essentially it's listening for a click, and once it's clicked it runs the funtction */}
                Plus
            </h1>
            <h1 onClick={() => setCount(count -1)}>
                Minus
            </h1>
        </div>
    )
}

export default CounterExample