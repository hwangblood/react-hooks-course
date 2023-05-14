import { useState, useRef, useEffect, useLayoutEffect } from "react";
import GutterRow from "../../GutterRow";

const LayoutEffectUsecase = () => {
  const hello = "Hello World";
  const [value, setValue] = useState(hello);

  const boxRef = useRef(null);

  useLayoutEffect(() => {
    boxRef.current.innerHTML =
      boxRef.current.innerHTML + `<br>useLayoutEffect: ${value}`;
  }, [value]);

  useEffect(() => {
    boxRef.current.innerHTML =
      boxRef.current.innerHTML + `<br>useEffect: ${value}`;

    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [value]);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(hello);
    boxRef.current.innerHTML = null;
  };

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleInput} />

        <GutterRow />
        <button onClick={handleReset}>Reset</button>
      </div>

      <div
        ref={boxRef}
        style={{
          overflow: "scroll",
          height: "140px",
          lineHeight: "25px",
        }}
      ></div>
    </>
  );
};

export default LayoutEffectUsecase;
