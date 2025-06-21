import React from 'react'
import Listsecond from './listsecond'
function Listmain() {
    const useres=[
        {id:1 ,name:"salman",age:21,skille:"html"},
        {id:2 ,name:"Mahir",age:20,skille:"js"},
        {id:3 ,name:"prajith",age:18,skille:"css"}
    ]
    const usersList=useres.map((user,index)=><Listsecond key={user.id} user={user}/>)
  return <div>{usersList}</div>
}

export default Listmain