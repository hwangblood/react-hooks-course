import { useReducer } from "react";
import GutterRow from "../../GutterRow";

/**
 * initialState
 */
const initialState = {
  count: 0,
  showText: true,
};

/**
 * Actions for reducer function
 */
const reducerActions = {
  increment: "increment",
  toggleShowText: "toggle-show-text",
  resetState: "reset-state",
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
    // when resetState action happens, reset the state to initial state
    case reducerActions.resetState:
      return initialState;
    // when unknown action happens, keep the count unchanged
    default:
      return state;
  }
};

const ReducerUsecase = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: reducerActions.increment });
  };

  const handleToggleShowText = () => {
    dispatch({ type: reducerActions.toggleShowText });
  };

  const handleResetState = () => {
    dispatch({ type: reducerActions.resetState });
  };

  return (
    <>
      <div>
        <span>count: {state.count}</span>
        <GutterRow />
        <GutterRow />
        {state.showText && (
          <span style={{ color: "blue" }}>showText: {`${state.showText}`}</span>
        )}
      </div>

      <div>
        <button onClick={handleIncrement}>Increase</button>
        <GutterRow />
        <button onClick={handleToggleShowText}>
          toggle {`${state.showText}`}
        </button>
        <GutterRow />
        <button
          onClick={() => {
            handleIncrement();
            handleToggleShowText();
          }}
        >
          increase & toggle
        </button>
        <GutterRow />
        <button onClick={handleResetState}>reset state</button>
      </div>
    </>
  );
};

export default ReducerUsecase;
