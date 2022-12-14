import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav.jsx";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  );
};

export default App;
