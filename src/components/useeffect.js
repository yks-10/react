import React, { useState, useEffect } from "react";

const BodyUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(prevCount => prevCount+1);
  }, []);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default BodyUseEffect;
