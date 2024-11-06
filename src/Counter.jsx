import React, { useState } from "react";

function Counter() {
  const [stateValue, func] = useState(10);

  const handleClick = () => {
    func(100);
  };

  return (
    <div className="flex gap-4 text-5xl items-center justify-center border-4 p-3">
      <button className="btn" onClick={handleClick}>
        -
      </button>
      <p>{stateValue}</p>
      <button className="btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default Counter;