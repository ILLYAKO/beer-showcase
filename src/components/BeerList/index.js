import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import BeerItem from "../BeerItem/index";
import { BeerContext } from "../../BeerContext";
import "./style.css";

const BeerList = () => {
  const beerWanted = useContext(BeerContext);
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        const result = res.data;
        setBeerData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="beer-list">
      {!beerWanted.beerName
        ? beerData.map((beer) => (
            <BeerItem key={beer.id} beer={beer}></BeerItem>
          ))
        : beerData
            .filter((beer) =>
              beer.name
                .toLowerCase()
                .includes(beerWanted.beerName.toLowerCase())
            )
            .map((beer) => <BeerItem key={beer.id} beer={beer}></BeerItem>)}
    </div>
  );
};

export default BeerList;
