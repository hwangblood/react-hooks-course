import UseHookExample from "./components/examples/useHook/UseHookExample";

export default {
  hookExamples: [
    {
      id: "useHook",
      title: "Title of the hook example",
      description: "Show the way how the hook works",
      // element is a React.JSX.Element class but not an instance, use it like: <item.element />
      element: UseHookExample,
    },
  ],
};
