import React, { useState } from 'react'

const Input = () => {
    const[name,setname]=useState(" ")

    const handleChange = (event) => {
        setname(event.target.value)
        console.log(name)
    }
  return (
    <div>
      {/* <input type='text' value={name} onChange={(e) => setname (e.target.value)}></input>*/}
      <button onClick={handleChange}>Add</button> 
      <input type='text' value={name} onChange={handleChange}></input>
    </div>
  )
}

export default Input
