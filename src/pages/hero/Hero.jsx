import React from "react";
import "./hero.css";
import homeVideo from "/homeVideo/homeVideo.mp4";

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <video autoPlay muted loop>
          <source src={homeVideo} type="video/mp4" />
        </video>
        {/* <video src={"/video/hero.mp4"} controls="controls" autoplay="true" /> */}

        <div class="heroContent">
          <h1>MindSuperior Consult</h1>
          <h3>Excellence Delivered, Satisfaction Guaranteed.</h3>
        </div>
      </div>

      {/* <section id="hero">
                
                <div className="heroContainer">

                </div>
            </section> */}
    </>
  );
};

export default Hero;
