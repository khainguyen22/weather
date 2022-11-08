import { useEffect } from "react";
import key from "./WeatherComponent/Weather/keyAPI";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import propTypes from "prop-types";
export default function Chartjs() {
  const [Value, setValue] = useState("");
  var d= (Value != null)?Value:"Thai";
  var frmdetails;
  var submitValue = () => {
    frmdetails = {
      Value: d,
    };
  };
    console.log(frmdetails);
  var [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=thai nguyen&units=metric&appid=fa574ade9c12b3365e10ce06f8a5a0cf`
      );
      const dt = await res.json();
      Data = dt ;
     // useState = {
    //   name: data["name"],
    //   visibility: data["visibility"],
    //   wind: data["wind"],
    //   country: data["country"],
    //   // temp: data['main']['temp'],
    //   // temp_max: data['main']['temp_max'],
    //   // temp_min: data['main']['temp_min'],
    //   // sunrise: data['sys']['sunrise'],
    //   // sunset:data['sys']['sunset'],
    //   // humidity:data['humidity'],
    //   // rain:data['rain'],
    //   // main:data['weather']['main'],
    //   // description:data['weather']['main']
    // };
    console.log(Data);
    console.log(useState.name);
    };
    fetchData();
  });
  
    // useState = {
    //   name: data["name"],
    //   visibility: data["visibility"],
    //   wind: data["wind"],
    //   country: data["country"],
    //   // temp: data['main']['temp'],
    //   // temp_max: data['main']['temp_max'],
    //   // temp_min: data['main']['temp_min'],
    //   // sunrise: data['sys']['sunrise'],
    //   // sunset:data['sys']['sunset'],
    //   // humidity:data['humidity'],
    //   // rain:data['rain'],
    //   // main:data['weather']['main'],
    //   // description:data['weather']['main']
    // };
  return (
    <>
      <hr />
      <input
        type="text"
        placeholder="Search Name City"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submitValue}>Submit</button>
    </>
  );
}
