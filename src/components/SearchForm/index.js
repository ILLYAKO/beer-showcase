import React, { useContext } from "react";
import { BeerContext } from "../../BeerContext";
import "./style.css";

const SearchInput = () => {
  const beerWanted = useContext(BeerContext);

  const formChangeHandler = (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
      beerWanted.setBeerName(e.target.value);
    }
  };

  return (
    <form
      className="d-flex justify-content-center beer-form-search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="form-control"
        type="text"
        name="beerName"
        onKeyDown={formChangeHandler}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInput;
