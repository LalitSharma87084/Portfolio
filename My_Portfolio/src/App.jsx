import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className=" flex flex-col  w-screen justify-center items-center">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;