import React from 'react';
import { useState } from 'react'

function Fr() {
  const [name, setName] = useState('')
  const[submit,setSubmit]=useState('')
    function handleName(event){
      setName(event.target.value)
    }
  function handleform(e){
    e.preventDefault()
    setSubmit(name)
  }
  return (
 <>
  <form onSubmit={handleform}>
    <input type='text' value={name} onChange={handleName}></input>
    <button type='submit'>submit</button>
  </form>
   {submit ? <h1>Name:{submit} </h1>: <h1>Name:</h1>}

  </>
  
  )
}

export default Fr
