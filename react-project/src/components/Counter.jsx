import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h1>Counter-{this.state.count}</h1><br/>
        <button onClick={()=>this.increment()}>Increment</button>
         </div>
    )
  }
}

export default Counter