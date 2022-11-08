import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from "../Table";
import Weather from "../Weather";
import "./style.css";
function App() {
  return (
    <div className="App container">
      <div className="Weather col-4">
        <Weather/>
      </div>
      <div className="table col-8">
        <Table/>
      </div>
    </div>
  );
}

export default App;
