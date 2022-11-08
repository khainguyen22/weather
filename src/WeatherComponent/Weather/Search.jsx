import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Search() {
  const [inputSearch, setSearch] = useState("");
  const param = useNavigate();
  const submitHandler = (e) => {
    console.log("search");
    e.preventDefault();
    param("/searched/" + inputSearch);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        value={inputSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch />
    </form>
  );
}

export default Search;
