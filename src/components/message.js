import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super() 
        this.state = {
            message:"welcome vistor"
        }
    }
    handelClick(){
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={()=>this.handelClick()}>subscribe</button>
            </div>
        )
    }
}
export default Message