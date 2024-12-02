import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  const redirectPage = () => {
    setTimeout(() => {
      console.log("done");
      // window.location.href="/home"
    }, 1000);
  };
  return (
    <>
      <section id="contact" className="my-4">
        <div className="contactContainer">
          <div className="contactContent">
            <div className="contactPhoneIcons">
              <div className="firstIcons">
                <p>
                  <i className="fa fa-phone"></i>
                </p>
              </div>
              <div className="secondIcons">
                <p>+1 (214) 613-8150</p>
                <p>+1 (218) 321-8481</p>
              </div>
            </div>

            <p>
              {" "}
              <span>
                <i
                  className="fa fa-envelope-o "
                  style={{ fontSize: "4rem", fontWeight: "bold" }}
                ></i>
              </span>
              info@mindsuperiorconsult.com
            </p>
          </div>
          <div className="contactForm">
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Contact Us
            </h1>

            <div className="formContainer">
              <form
                method="Post"
                action="https://formsubmit.co/info@mindsuperiorconsult.com"
              >
                <div className="name">
                  <div className="firstName">
                    <input
                      type="text"
                      id="fname"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>
                  <div className="firstName">
                    <input
                      type="text"
                      id="sname"
                      placeholder="Second Name"
                      name="secondName"
                    />
                  </div>
                </div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    style={{}}
                  />
                </div>
                <div className="textarea">
                  <textarea
                    id="contactarea"
                    cols="48"
                    rows="5"
                    name="text"
                  ></textarea>
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    name="submit"
                    class=""
                    style={{
                      padding: ".6rem 2rem ",
                      fontSize: "2rem",
                      width: "46rem",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={redirectPage}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
