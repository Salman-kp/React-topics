import React from "react";

let Greet =(props)=> {
    return (
      <div>
        <h1>Hello {props.name}</h1>
        {props.children}
       
      </div>
       
    )
}
export default Greet