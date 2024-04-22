import React, { useState } from 'react'

const Sajin = () => {
    const [name,setname]=useState(" ")
    const [name1,setname1]=useState(" ")
    const [pass,setpass]=useState(" ")

    const handleClick = (event) => {
        console.log(name)
        console.log(name1)
        console.log(pass)


    }

    const handleName1 = (event) => {
        setname(event.target.value)
        // console.log(name)
    }
    const handleName2 = (event) => {
        setname1(event.target.value)
        // console.log(name)
    }
    const handlePass = (event) => {
        setpass(event.target.value)
        // console.log(name)
    }

  return (
    <div> 
        <input type='text' id='name' name='name' onChange={handleName1} />
        <input type='text' id='name1' name='name1' onChange={handleName2} />
        <input type='password' id='pass' name='pass' onChange={handlePass}  />

        <button onClick={handleClick}> Submit </button> 

    </div>
  )
}

export default Sajin
