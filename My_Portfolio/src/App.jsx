import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default App;