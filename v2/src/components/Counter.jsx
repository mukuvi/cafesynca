import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDencrement() {
    setCount(count - 1);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Count++</button>
      <button onClick={handleDencrement}>Count--</button>
    </>
  );
};
