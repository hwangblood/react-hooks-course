import { useState } from "react";
import GutterRow from "../../GutterRow";

const InputValueUsecase = () => {
  const defaultValue = "Empty Value";
  const [inputValue, setInputValue] = useState("");
  const updateValue = (value) => {
    const newValue =
      value == (null || undefined) || value.length == 0 ? defaultValue : value;
    setInputValue(newValue);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => updateValue(e.target.value)}
      />
      <GutterRow />
      {inputValue || defaultValue}
    </>
  );
};

export default InputValueUsecase;
