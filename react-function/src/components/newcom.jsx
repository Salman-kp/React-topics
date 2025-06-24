import React, { useEffect, useState } from 'react'

export default function NewCom () {
    const[qurt,setData]=useState([])
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setData(data.slice(0,10)))
 },[])

 console.log(qurt)
  return (
    <>
     <ul>{qurt.map(qurte=>(
        <li key={qurte.id}>{qurte.title}</li>
     ))}</ul> 
    </>
  )
}
