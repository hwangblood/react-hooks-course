import HookExampleUsecaseContentSpacer from "./components/HookExampleUsecaseContentSpacer";
import EffectUsecase from "./components/usecases/useEffect/EffectUsecase";
import HamburgUsecase from "./components/usecases/useLayoutEffect/HamburgUsecase";
import LayoutEffectUsecase from "./components/usecases/useLayoutEffect/LayoutEffectUsecase";
import ReducerUsecase from "./components/usecases/useReducer/ReducerUsecase";
import RefUsecase from "./components/usecases/useRef/RefUsecase";
import CounterUsecase from "./components/usecases/useState/CounterUsecase";
import InputValueUsecase from "./components/usecases/useState/InputValueUsecase";

// eslint-disable-next-line no-unused-vars
const fakeUsecases = [
  {
    id: "fake-usecase",
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
const useEffectUsecases = [
  {
    id: "effect-usecase",
    title: "API calling by useEffect",
    description:
      "Call HTTP API when component firstly renders or clicking the button",
    element: EffectUsecase,
  },
];
const useRefUsecases = [
  {
    id: "ref-usecase",
    title: "Handle input's changes, and access DOM element",
    description:
      "Store the number of renders for component, and operate DOM element. Click buttons to see how it works",
    element: RefUsecase,
  },
];
const useLayoutEffectUsecases = [
  {
    id: "layout-effect-usecase",
    title: "Track a value with useLayoutEffect() and useEffect()",
    description:
      "Every time when typing in the text box will update state, so component needs to be re-render. The values should be same, because we have changed state before rendering component.",
    element: LayoutEffectUsecase,
  },
  {
    id: "eating-hamburg",
    title: "Eating Hamburg",
    description:
      "Every time when typing in the text box will have one more hamburg 🍔, at this time useLayoutEffect() will be fired to store current eating logs and a new log into state, then re-generate eating logs list.",
    element: HamburgUsecase,
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
    {
      id: "useEffect",
      title: "useEffect() Hook Example",
      description:
        "It allows you to perform side effects in your components. Such as: fetching data, directly updating the DOM, and timers.",
      usecases: useEffectUsecases,
    },
    {
      id: "useRef",
      title: "useRef() Hook Example",
      description:
        "It allows you to persist values between renders and access a DOM element directly.",
      usecases: useRefUsecases,
    },
    {
      id: "useLayoutEffect",
      title: "useLayoutEffect() Hook Example",
      description:
        "It is fimilar to userEffect(),but it fires before the component render ( very useful in specific cases).",
      usecases: useLayoutEffectUsecases,
    },
  ],
};
