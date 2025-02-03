import React, {useState} from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function increment(){
        // count = count + 1
        // let newCount = count + 1
        setCount(count => count + 1)
        console.log("added", count)
    }

    function decrement(){
        setCount(count => count - 1)
        console.log("subtracted", count)
    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span className="bg-pink-500">
            {count}
        </span>
        <button onClick={increment}>+</button>
    </div>
  )    
}