import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="aboutContainer">
          <div className="aboutContent">
            <div className="aboutContentHeading">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <p>
                Welcome to MindSuperior Consult, your trusted partner in
                Recruitment Outsourcing. We are a dedicated team of experts who
                are passionate about revolutionizing the way organizations
                attract, engage, and retain top talent.
              </p>
            </div>
            <div className="aboutBtn">
              <Link
                to="/aboutus"
                class=" aboutKnowBtn"
                style={{
                  textDecoration: "none",
                  // color:"black",
                  // backgroundColor:"red"
                }}
              >
                Know More <i class="fa fa-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
          <div className="aboutImage">
            <img src="/img/aboutUs.png" alt="logo" loading="lazy" />
            {/* <iframe src="iframe" frameborder="0" loading="lazy"></iframe> */}
          </div>
        </div>
        <div className="aboutSupportContent">
          <p style={{ fontSize: "2rem" }}>
            "You want to know the secret to why some people are so Blessed? They
            give. They support. They're the person who always says yes. They
            give their time. They give a ride. They lend a shoulder to lean on
            and a ear to listen. Always there for other people's problems.
            Always giving encouragement. Would give the clothes off their back
            and their last dollar. Teach people the proper ways to making money.
            Get them jobs. Forgive debts. Be loyal! And the list goes on... See,
            you don't know how other folks entertain strangers unaware and do
            good deeds for their families and friends. You don't know the good
            hearts of the people who get judged but GOD does and he rewards them
            openly. So, when you see the person beside you prosper just know
            that’s the RIGHTEOUS GOD!!! To the people who have good hearts and
            you seem to go unnoticed, done wrong, misjudged, used & abused.{" "}
          </p>
          <p className="para">GOD ALWAYS GOT YOU!!"</p>
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Founder & CEO
          </p>
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Rahul (Jesse) Dinkar
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
