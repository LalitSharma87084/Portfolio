import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          FRONT-END DEVELOPER
        </h1>
        <h2 className="mt-6 text-gray-400 text-lg md:text-2xl max-w-xl mx-auto leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Lalit Sharma</span>,  
          a front-end developer based in Hisar, Haryana. <br className="hidden md:block" />
          Passionate about creating user-friendly and responsive web applications. <br />
          Currently pursuing <span className="text-white font-semibold">Masters in Computer Applications</span>.
        </h2>
      </motion.section>
    </div>
  );
}

export default Hero;
