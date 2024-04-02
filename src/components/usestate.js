import React, {useState} from "react";


const BodyUseState = ({initialCount}) =>{
    const [count, setCount] = useState(initialCount);

    function increment() {
      setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function clear(){
        setCount(0)
    }
    return (
        <div>
                    <br></br>
            <button onClick={decrement}> -</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={clear}>clear</button>


        </div>
    );
};

export default BodyUseState;