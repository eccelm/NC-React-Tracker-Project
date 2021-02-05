import "./App.css";

import { Router } from "@reach/router";
//import Nav from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Blocks from "./Components/Blocks";
import Students from "./Components/Students";

function App() {
  
  return (
      <Router>
        <HomePage path="/" />
        <Blocks path="/blocks" />
        <Students path="/students" />
      </Router>
  
  );
}

export default App;
