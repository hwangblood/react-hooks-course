import HookExampleUsecaseContentSpacer from "./components/HookExampleUsecaseContentSpacer";
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
    description: "Counter App",
    // A React element type (ie. MyComponent).
    element: CounterUsecase,
  },
  {
    id: "input-value",
    title: "Input Value",
    description: "Input Value App",
    element: InputValueUsecase,
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
      description: "useState description",
      usecases: useStateUsecases,
    },
  ],
};
