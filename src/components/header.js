import React from "react";

function handleClick() {
    alert('welcome to react JS!');
  }
export const Header = () => <header className={`font-italic`}>
                                <h1>React Sambava Club      <button onClick={handleClick}>welcome</button> </h1>
                            </header>
export const Header1 = ({name, heroname}) => <header >
                              <h1> i am {name} also called as {heroname} </h1>
                            </header>

