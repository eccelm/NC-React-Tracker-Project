import "./App.css";

import { Router } from "@reach/router";
//import Nav from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Students from "./Components/Students";

function App() {
  return (
    // is div needed now?
    <div className="App">
      <Router>
        <HomePage path="/" />
        <Students path="/students" />
      </Router>
    </div>
  );
}

export default App;
