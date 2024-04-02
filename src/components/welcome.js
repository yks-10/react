import React,{ Component } from "react";

class Welcome extends Component{
    render(){
        return <h2>I am  {this.props.name} of {this.props.heroname} class component</h2>
    }
}
export default Welcome
