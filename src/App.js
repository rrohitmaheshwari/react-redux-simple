import React from "react";
import "./App.css";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";

const App = props => {
  return (
    <div className="App">
      App
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
};

export default App;
