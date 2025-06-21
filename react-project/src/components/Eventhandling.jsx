import React from 'react'
import { useState } from 'react';

export default function Eventhandling() {
 const [text,setText] = useState('')
  //  function handleclick(){
  //    const h1 = document.querySelector('h1');
  //    h1.style.color = 'red';
  //  }
//      function chagepara(event){
// setText(event.target.value)
//   }
  return (
    <div>

      {/* <input type="text" onChange={chagepara} />
      <p>yahooo {text}</p> */}
        {/* <h1>Click the button</h1>
        <button onClick={handleclick}>Click me</button> */}
    </div>
  )
}
