import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./WeatherComponent/Container";
import Chart from "./chartjs";
function App() {
  return (
    <div className="App container">
      <Chart />
    </div>
  );
}

export default App;
