import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "./apiKey";
function Searched() {
  console.log("Searched");
  const [searchedValue, setSearched] = useState([]);
  const params = useParams();
  const getSearched = async (name) => {
    let api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cusine=${name}`
    );
    const data = await api.json();
    const dt = data.results;
    setSearched(dt);
    console.log(dt);
  };
  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);
  }, [params.search]);
  return (
    <div>
      {searchedValue.map((item) => {
        return (
          <div className="col-3 card" key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
