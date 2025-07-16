import React from 'react'
import { useState } from 'react'
function counter() {
  const [count,setCount]=useState(0)
  if(count<0){
    setCount(count + 1)
  }
  return (
    <>
    <p>quantity:{count}</p>
    <button onClick={() => setCount((c) => c-1 )}>-</button>
    <button onClick={() => setCount((c) => c+1 )}>+</button>
    </>
  )
}

export default counter