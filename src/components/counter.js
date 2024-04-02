import React,{ Component } from "react";

class Counter extends Component{
    constructor(){
        super() 
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState(previousState => ({
            count : previousState.count +1
        }))
    }
    render(){
        return(
            <div>
                <h1> Count {this.state.count} </h1>
                <button onClick={()=>this.increment()}>increment</button>
            </div>
        )
    }
}
export default Counter