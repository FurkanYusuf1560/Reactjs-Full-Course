import { useState } from "react"


export default function Counter(){
    
    const [count, setCount] = useState(0);
    
    function handleClick(){
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}