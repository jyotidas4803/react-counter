import { useState } from "react";

function Counter({ start = 0, step = 1, danger = false }) {
  const [counter, setCounter] = useState(+start);

  const handleClick = (type) => {
    if (type === "minus") {
      setCounter(counter - step);
      return;
    }

    setCounter(counter + step);
  };

  return (
    <div className="flex items-center gap-4 border p-1">
      <button
        className={`btn ${danger && "red"}`}
        onClick={() => handleClick("minus")}
      >
        -
      </button>
      <p className="text-4xl font-bold">{counter}</p>
      <button
        className={`btn ${danger && "red"}`}
        onClick={() => handleClick()}
      >
        +
      </button>
    </div>
  );
}

export default Counter;