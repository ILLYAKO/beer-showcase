import React, { useState, useEffect } from "react";
import "./style.css";

const BeerItem = ({ beer }) => {
  const [isAtFirst, setIsAtFirst] = useState(true);
  const [textButton, setTextButton] = useState("Show details");
  const [buttonStyle, setButtonStyle] = useState({ visibility: "hidden" });
  const [isButtonShown, setIsButtonShown] = useState(false);
  const [isDetailShown, setIsDetailShown] = useState(false);
  const [animationCard, setAnimationCard] = useState(false);
  const [detailTextStyle, setDetailTextStyle] = useState({
    display: "none",
    visibility: "hidden",
  });

  useEffect(() => {}, []);

  const buttonTextChange = (text) => {
    if (text === "Hide details") {
      setTextButton("Hide details");
      !isButtonShown && setButtonStyle({ visibility: "hidden" });
    } else {
      setTextButton("Show details");
      setButtonStyle({ visibility: "visible" });
    }
  };

  const onMouseEnterHandler = () => {
    setIsButtonShown(true);
    buttonTextChange(textButton);
  };

  const onMouseLeaveHandler = () => {
    setIsButtonShown(textButton === "Show details" ? false : true);
    buttonTextChange(textButton);
  };

  const onClickHandler = () => {
    setAnimationCard(animationCard ? false : true);
    setIsDetailShown(isDetailShown ? false : true);
    setTextButton(
      textButton === "Show details" ? "Hide details" : "Show details"
    );
    setIsAtFirst(false);
    setDetailTextStyle(
      detailTextStyle.display === "none"
        ? { display: "block", visibility: "visible" }
        : { display: "none" }
    );
  };

  return (
    <div
      className={
        isAtFirst
          ? "card beer-card-item"
          : animationCard
          ? "card beer-card-item-zoomed-in"
          : "card beer-card-item-zoomed-out"
      }
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="row mx-0 beer-row-item">
        <div
          className="col-md-4 beer-card-left beer-img-card shake-lr"
          style={{
            backgroundImage: "url(" + beer.image_url + ")",
          }}
          title={beer.name}
        ></div>
        <div className="col-md-8 card-body beer-card-right">
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <button
            style={buttonStyle}
            className={
              isButtonShown
                ? "btn beer-btn beer-btn-animation-fade-in jello-horizontal"
                : "btn beer-btn beer-btn-animation-fade-out "
            }
            onClick={onClickHandler}
          >
            {textButton}
          </button>

          <div
            style={detailTextStyle}
            className={
              isDetailShown
                ? "card-text mt-2 beer-det-text-fade-in"
                : "card-text mt-2 beer-det-text-fade-out"
            }
          >
            <ul>
              <li>
                <span className="beer-descripttion-bold">boil volume: </span>
                <span className="beer-descripttion">
                  {beer.boil_volume.value} {beer.boil_volume.unit}
                </span>
              </li>
              <li>
                <span className="beer-descripttion-bold">brewers tips: </span>
                <span className="beer-descripttion">{beer.brewers_tips}</span>
              </li>
              <li>
                <span className="beer-descripttion-bold">contributed by: </span>
                <span className="beer-descripttion">{beer.contributed_by}</span>
              </li>
              <li>
                <span className="beer-descripttion-bold">description: </span>
                <span className="beer-descripttion">{beer.description}</span>
              </li>
              <li>
                <span className="beer-descripttion-bold">first brewed: </span>
                <span className="beer-descripttion">{beer.first_brewed}</span>
              </li>
              <li>
                <span className="beer-descripttion-bold">food pairing: </span>
                <ul>
                  {beer.food_pairing.map((food, index) => (
                    <li key={index}>
                      <span className="beer-descripttion">{food}</span>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="beer-descripttion-bold">ingredients: </span>
              </li>
              <li>
                <span className="beer-descripttion-bold">tagline: </span>
                <span className="beer-descripttion">
                  {beer.tagline}
                </span>
              </li>
              <li>
                <span className="beer-descripttion-bold">volume: </span>
                <span className="beer-descripttion">
                  {beer.volume.value} {beer.volume.unit}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerItem;
