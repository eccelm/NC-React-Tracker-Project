
import "./Appsass.scss"
import { Router } from "@reach/router";
import HomePage from "./Components/HomePage";
import Students from "./Components/Students";

function App() {
  return (
 
    <div className="App">
      <Router>
        <HomePage path="/" />
        <Students path="/students" />
      </Router>
    </div>
  );
}

export default App;
