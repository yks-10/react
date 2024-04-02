import React from 'react'


function handelclick(){
    console.log('Button Clicked')
}

function FunctionClick() {
  return (
    <div>
        <br></br>
        <button onClick={handelclick}>event</button>
    </div>
  )
}

export default FunctionClick