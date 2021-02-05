import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./Components/HomePage";
import Students from "./Components/Students";

function App() {

  return (
      <Router>
        <HomePage path="/" />
        <Students path="/students" />
      </Router>
  
  );
}

export default App;
