import React from "react";
import "./css/style.css";
import { Button } from "reactstrap";
import Header from "./components/header";
import Suggestion from "./components/Suggestion";
import Displaymap from "./components/displaymap";

function App() {
  return (
    <div className="App">
      <Header />
      <Suggestion />
    </div>
  );
}

export default App;
