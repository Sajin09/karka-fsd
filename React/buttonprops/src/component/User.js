import React, { useState } from 'react'

const User = () => {

  const [data, setData] = useState({
    name: '',
    pass: ''
  })
  const handleClick = (e) => {
    e.preventDefault()
    console.log(data)
    // setData(data.name="")
    setData({ ...data, name: '' ,pass:''});

  }
  
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  return (
    <form>
      <input type='text' onChange={handleChange} value={data.name} name='name' />
      <input type='text' onChange={handleChange} value={data.pass} name='pass' />

     

      <button onClick={handleClick}>ok</button>
    
    </form>
  )
}
export default User