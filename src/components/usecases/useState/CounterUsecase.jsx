import { useState } from "react";

const CounterUsecase = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count - 1);
  const decrease = () => setCount(count + 1);
  return (
    <>
      <button onClick={increase}>-</button>
      <span
        style={{
          margin: "0px 8px",
        }}
      >
        {count}
      </span>
      <button onClick={decrease}>+</button>
    </>
  );
};

export default CounterUsecase;
