import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section id="navbar" className="p-2">
        <div className="container">
          <nav class="navbar navbar-expand-lg bg-body-dark">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                <img src="/img/footerLogo.jpeg" className="navbarLogo" alt="" />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/" class="nav-link">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/aboutus" class="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/career" class="nav-link">
                      Career
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/services" class="nav-link">
                      Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contactUs" class="nav-link active">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
