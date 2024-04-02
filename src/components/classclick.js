import React, { Component } from 'react'

class Classclick extends Component {
    handelClick(){
        console.log("clicked the button")
     }
  render() {
    
    return (
      <button onClick={this.handelClick}>classclick</button>
    )
  }
}

export default Classclick