import React from 'react'

export default function Conditionrendering(props) {
//    if(props.isLogined){
//         return <h1>Welcome back</h1>
//     }else{
//         return <h1>Please Login</h1>
//     }
  return (
    <div><h1>{props.isLogined ?'welcome back':'please sign in'}</h1></div>
  )
}
