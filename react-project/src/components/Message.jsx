import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "light",
    };
  }
  changeMessage(){
    this.setState({
        message:"Dark"
    })
  }
  render() {
    return (
    <div>
        <h1>The Background Color is{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Clik Me!</button>
    </div>
    )
  }
}
export default Message