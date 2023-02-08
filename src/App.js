import "./styles/App.css";
import { mockMode } from "./utils/utilVars";
import { initMock } from "./data/dataConnector";
import EditBox from "./components/EditBox";
import Tools from "./components/Tools";
import List from "./components/List";

function App() {
  if (mockMode.enabled) {
    initMock();
  }

  return (
    <div className="app">
      <div className="app__header --wrapper --transparent">
        <h4 className="app__header-title">Listado de Pokemon</h4>
        <Tools />
      </div>
      <List />
      <EditBox />
    </div>
  );
}

export default App;
