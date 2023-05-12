import { useReducer } from "react";
import GutterRow from "../../GutterRow";

/**
 * Actions for reducer function
 */
const reducerActions = {
  increment: "increment",
  toggleShowText: "toggle-show-text",
};

/**
 * reducer function for calculating state changes
 * @returns state
 */
const reducer = (state, action) => {
  switch (action.type) {
    // when increment action happens, update the count state, but keep showText unchanged
    case reducerActions.increment:
      return { count: state.count + 1, showText: state.showText };
    // when toggleShowText action happens, update the showText state, but keep count unchanged
    case reducerActions.toggleShowText:
      return { count: state.count, showText: !state.showText };
    // when unknown action happens, keep the count unchanged
    default:
      return state;
  }
};

const UseReducerUsecase = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const handleIncrement = () => {
    dispatch({ type: reducerActions.increment });
  };

  const handleToggleShowText = () => {
    dispatch({ type: reducerActions.toggleShowText });
  };

  return (
    <>
      <div>count: {state.count}</div>
      <div>
        <button onClick={handleIncrement}>Increase</button>
      </div>

      {state.showText && (
        <div>Click the button below to toggle me showing or hiden.</div>
      )}
      <div>
        <button onClick={handleToggleShowText}>toggle</button>
        <GutterRow />
        <span>{state.showText ? "text is showed" : "text is hidden"}</span>
      </div>

      <div>
        <button
          onClick={() => {
            handleIncrement();
            handleToggleShowText();
          }}
        >
          increase & toggle
        </button>
      </div>
    </>
  );
};

export default UseReducerUsecase;
