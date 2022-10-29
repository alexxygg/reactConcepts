import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button
        onClick={(event) => {
          event.target.value = setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={(event) => {
          event.target.value = setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default Counter;
