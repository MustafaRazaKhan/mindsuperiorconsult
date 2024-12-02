import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="footerContainer">
          <div className="footerContact">
            <div className="footerLogo">
              <img src="/img/footerLogo.jpeg" alt="" />
            </div>
            <div className="footerContactContent">
              <div className="icons">
                <div className="iconsContent">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="iconsParaContent">
                  <p>+1 (214) 613-8150</p>
                  <p> +1 (218) 321-8481</p>
                </div>
              </div>
            </div>
            <div className="footerContactEmail">
              <div>
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                  </span>
                  info@mindsuperiorconsult.com
                </p>
              </div>
              <div>
                <p>Connect</p>
                <a
                  href="https://in.linkedin.com/company/mindsuperiorconsult"
                  className=""
                  style={{
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  <p>
                    <span>
                      {/* <i className="fa fa-envelope-o"></i> */}
                      <FaLinkedin className="" style={{ fontSize: "3rem" }} />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="footerLinks">
            <div className="links">
              <p>Quick Links</p>
            </div>
            <div className="menuLinks">
              <ul>
                <li>
                  <Link to="/home" class="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" class="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/career" class="nav-link">
                    Career
                  </Link>
                </li>
                <Link to="/services" class="nav-link">
                  Services
                </Link>
                <li>
                  {" "}
                  <Link to="/contactUs" class="nav-link active">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerCommunity">
            <div className="footerCommunityContent">
              <p>Join our community or say hello.</p>
            </div>

            <div className="footerRight">
              <p>
                Copyright © 2022-23. All rights reserved. <br />
              </p>
              <p>MindSuperior Consult </p>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
