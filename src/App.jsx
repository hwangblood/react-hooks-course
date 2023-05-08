import "./App.css";
import HookExampleList from "./components/HookExampleList";
import data from "./data";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Course</h1>
      <hr style={{ height: "1px" }} />

      <HookExampleList items={data.hookExamples} />
    </div>
  );
}

export default App;
