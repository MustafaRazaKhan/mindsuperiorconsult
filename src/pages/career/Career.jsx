import React from "react";
// import Hero from '../hero/Hero'
import "./career.css";
import careerVideo from "/careerVideo/careerVideo.mp4";
import ContactUs from "../contactUs/ContactUs";

const Career = () => {
  return (
    <>
      <div className="careerContainer">
        <video autoPlay muted loop>
          <source src={careerVideo} type="video/mp4" />
        </video>
        {/* <video src={"/video/hero.mp4"} controls="controls" autoplay="true" /> */}

        <div class="careerContent">
          <h1>Come Join Our Team</h1>
          {/* <h3>Excellence Delivered,Satisfication Guranteed</h3> */}
        </div>
      </div>
      <div className="opening">
        <div className="openingContainer">
          <div className="leftOpeningContainer">
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              Openings
            </h2>
            <div className="cardContainer">
              <div className="leftCard">
                <div className="img">
                  <img src="/Career/recruiters.jpg" alt="" lazy="loading" />
                </div>
                <div className="openingcontent">
                  <h1>Recruiters</h1>
                </div>
              </div>
              <div className="leftCard">
                <div className="img">
                  <img
                    src="/Career/email marketing.jpg"
                    alt=""
                    lazy="loading"
                  />
                </div>
                <div className="openingcontent">
                  <h1>Email Marketing</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rightOpeningContainer">
            {/* <ContactUs/> */}
            <div className="contactForm">
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Join Our Team
              </h1>
              <form action="">
                <form
                  method="Post"
                  action="https://formsubmit.co/info@mindsuperiorconsult.com"
                >
                  <div className="name">
                    <div className="firstName">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="cfname"
                      />
                    </div>
                    <div className="firstName">
                      <input
                        type="text"
                        name="csname"
                        placeholder="Second Name"
                      />
                    </div>
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      name="cemail"
                      placeholder="Email"
                      id=""
                    />
                  </div>
                  <div className="textarea">
                    <textarea name="ctext" id="" cols="45" rows="5"></textarea>
                  </div>
                  <div className="buttons">
                    <button
                      type="submit"
                      class=""
                      name="csubmit"
                      style={{
                        padding: ".6rem 2rem ",
                        fontSize: "2rem",
                        width: "46rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
