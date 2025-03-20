import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState("james");
  function handleIncrement() {
    setCount("jany");
  }
  function handleDencrement() {
    setCount("john");
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Count++</button>
      <button onClick={handleDencrement}>Count--</button>
    </>
  );
};
