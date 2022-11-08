import React from "react";
import "react-tabs/style/react-tabs.css";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const defaultValue="Thai Nguyen";
  const searchValue="";

  return (
    <div className="Table col-8">
        <input defaultValue={defaultValue} className="search_city" id="search_city" value={searchValue} />
    </div>
  );
}

export default Weather;
