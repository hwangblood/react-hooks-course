import HookExampleUsecaseContentSpacer from "./components/HookExampleUsecaseContentSpacer";

const fakeUsecases = [
  {
    id: "usecase-id",
    title: "Title of usecase",
    description: "Description of usecase",
    // A React element type (ie. MyComponent).
    element: HookExampleUsecaseContentSpacer,
  },
];

export default {
  // this property is required
  hookExamples: [
    {
      id: "next-hook",
      title: "Next Hook Example (waiting)",
      description: "Waiting for building usecases for this hook",
      // usecases should be an array like fakeUsecases
      usecases: fakeUsecases,
    },
  ],
};
