import HookExampleUsecaseContentSpacer from "./components/HookExampleUsecaseContentSpacer";
import ReducerUsecase from "./components/usecases/useReducer/ReducerUsecase";
import CounterUsecase from "./components/usecases/useState/CounterUsecase";
import InputValueUsecase from "./components/usecases/useState/InputValueUsecase";

// eslint-disable-next-line no-unused-vars
const fakeUsecases = [
  {
    id: "usecase-id",
    title: "Title of usecase",
    description: "Description of usecase",
    // A React element type (ie. MyComponent).
    element: HookExampleUsecaseContentSpacer,
  },
];

const useStateUsecases = [
  {
    id: "counter",
    title: "Counter",
    description:
      "Click the button to increase or decrease the value of the counter",
    // A React element type (ie. MyComponent).
    element: CounterUsecase,
  },
  {
    id: "input-value",
    title: "Input Value",
    description: "Enter text in the text box, to see value changes",
    element: InputValueUsecase,
  },
];

const useReducerUsecases = [
  {
    id: "reducer-usecase",
    title: "Manage complex state in useReducer()",
    description:
      "Use useReducer() to manage complex state, but not multiple useState()",
    element: ReducerUsecase,
  },
];

export default {
  // this property is required
  hookExamples: [
    // {
    //   id: "next-hook",
    //   title: "Next Hook Example (waiting)",
    //   description: "Waiting for building usecases for this hook",
    //   // usecases should be an array like fakeUsecases
    //   usecases: fakeUsecases,
    // },
    {
      id: "useState",
      title: "useState() Hook Example",
      description:
        "It allows us to track state in a function component or application. (State generally refers to data or properties) ",
      usecases: useStateUsecases,
    },
    {
      id: "useReducer",
      title: "useReducer() Hook Example",
      description:
        "If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.",
      usecases: useReducerUsecases,
    },
  ],
};
