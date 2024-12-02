import React from "react";
import "./WhoWeServeCard.css";
import WhoWeServeCard from "./WhoWeServeCard";
import card from "./card";

const WhoWeServe = () => {
  const tel = "/img/Telecom.png";
  const pharma = "/img/Pharma.jpg";
  // console.log(card)
  return (
    <>
      <section id="whoweserve">
        <h1>Who We Serve</h1>
        <div className="serveContainer">
          {card.map((ele) => {
            console.log(ele.img);
            return <WhoWeServeCard title={ele.name} images={ele.img} />;
          })}
        </div>
      </section>
    </>
  );
};

export default WhoWeServe;
