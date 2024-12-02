import React from "react";
import "./WhoWeServeCard.css";

const WhoWeServeCard = (props) => {
  return (
    <>
      <div className="whoweserveCard">
        <div className="cardImg">
          {/* <img src="../../public/img/education.jpg" alt="logo" /> */}
          <img src={props.images} alt="logo" lazy="loading" />
        </div>
        <div className="cardContent">
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default WhoWeServeCard;
