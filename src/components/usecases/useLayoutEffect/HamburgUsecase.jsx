import { useState, useRef, useEffect, useLayoutEffect } from "react";
import GutterRow from "../../GutterRow";

const HamburgUsecase = () => {
  const initialState = { hamburgCount: 0, hamburgLogs: [] };

  const [hamburgCount, setHamburgCount] = useState(initialState.hamburgCount);
  const [hamburgLogs, setHamburgLogs] = useState(initialState.hamburgLogs);

  const boxRef = useRef(null);

  useLayoutEffect(() => {
    setHamburgLogs((prevLogs) => [
      ...prevLogs,
      `${hamburgCount} hamburgs have been eaten.`,
    ]);
  }, [hamburgCount]);

  useEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [hamburgCount]);

  const HandleEat = () => {
    setHamburgCount(hamburgCount + 1);
  };

  const handleReset = () => {
    setHamburgCount(initialState.hamburgCount);
    setHamburgLogs(initialState.hamburgLogs);
  };

  return (
    <>
      <div>
        <button onClick={HandleEat}>One more 🍔</button>
        <GutterRow />
        <button onClick={handleReset}>Reset</button>
      </div>
      <div
        ref={boxRef}
        style={{
          overflowY: "scroll",
          height: "140px",
          lineHeight: "25px",
        }}
      >
        {hamburgLogs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </>
  );
};

export default HamburgUsecase;
