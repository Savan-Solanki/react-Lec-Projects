import React, { useState } from 'react'

export default function Counter() {

    const [name, setName] = useState("Jaadu")

    const [count,setCount] = useState(0)

    const increament = () =>{
      setCount(count + 1)
    }
    
    const decreament = () => {
      if (count > 0) {
        setCount(count - 1)
      } else {
        alert("can't do Decrease")
      }
    }
  return (
    <div>
      {/* Change Name */}
      <h2>Name : {name}</h2>
      <button onClick={() => setName("Chin Tappak Dam Dam")} onDoubleClick={()=>setName("Jaadu")}>Change Name</button>
    
    {/* Counter */}
    <h2>Count : {count}</h2>
    <button onClick={increament}>Increament</button>

    {/* <h2>{count}</h2> */}
    <button onClick={decreament}>Decreament</button>
    </div>
  )
}
