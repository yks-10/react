import React from "react";

const Header = () => {
  function handleClick() {
    alert('Vanakam da maple!');
  }
 return (
    <header className={`font-italic`}>
      {/* Your header content goes here */}
      <h1>React Sambava Club      <button onClick={handleClick}>vanakam</button> </h1>
    
    </header>
  );
};

export default Header;
