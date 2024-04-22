import React, { useState } from 'react'

const Button = ({click}) => {
const[count,setcount]=useState(0)

    const increment = () => {
        setcount(count + 1)
        console.log(count)
       
    }

    const decrement = () => {
        setcount(count - 1)
        console.log(count)
        if(count < 1)
        {
            alert('No Negative value')
            setcount(0)
        }

    }

  return (
    <div>
      <button onClick={click}>notify</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>

    </div>
  )
}

export default Button
