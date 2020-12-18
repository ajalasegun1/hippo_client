import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div style={{ width: "70%", marginRight: "auto", marginLeft: "auto" }}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
