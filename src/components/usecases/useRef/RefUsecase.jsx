import { useState, useEffect, useRef } from "react";
import GutterRow from "../../GutterRow";

const RefUsecase = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Ex..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <GutterRow />
        <span>
          when typing something, this component will be rendered over and over
          again
        </span>
      </div>

      <div>Render Count: {count.current}</div>

      <div>
        <button onClick={handleFocus}>Focus the input</button>
        <GutterRow />
        <button onClick={handleClear}>Clear the input</button>
      </div>
    </>
  );
};

export default RefUsecase;
