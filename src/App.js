import "./App.css";

import { Router } from "@reach/router";
//import Nav from "./Components/NavBar";
import HomePage from "./Components/Home";
import Blocks from "./Components/Blocks";

function App() {
  return (
    // is div needed now?
    <div className="App">
      <Router>
        <HomePage path="/" />
        <Blocks path="/blocks" />
      </Router>
    </div>
  );
}

export default App;
