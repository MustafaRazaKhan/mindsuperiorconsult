import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
// import Contact from './pages/contact/Contact'
import Navbar from "./Component/Navbar";
import ContactUs from "./pages/contactUs/ContactUs";
import Career from "./pages/career/Career";
import Services from "./pages/services/Services";
// import Services from './pages/services/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <redirect to='/'/> */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route exact path="/contactUs" element={<ContactUs />}></Route>
        <Route exact path="/career" element={<Career />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
      {/* <Contact/> */}
      {/* <Services/> */}
    </>
  );
};

export default App;
