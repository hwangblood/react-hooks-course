import "./App.css";
import Divider from "./components/Divider";
import HookExampleList from "./components/HookExampleList";
import HookExampleListEmptySpacer from "./components/HookExampleListEmptySpacer";
import ListWraper from "./components/ListWraper";
import data from "./data";

function App() {
  const hookExamples = data.hookExamples;

  return (
    <div className="App">
      <h1>React Hooks Course</h1>

      <Divider />

      <ListWraper
        listData={hookExamples}
        empty={<HookExampleListEmptySpacer />}
      >
        <HookExampleList items={hookExamples} />
      </ListWraper>
    </div>
  );
}

export default App;
