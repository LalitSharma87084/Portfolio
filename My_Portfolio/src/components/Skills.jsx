import React from 'react'
import { motion } from "framer-motion";


export default function Skills() {
  return (
<motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16 px-8"
      >
        <h2 className="text-2xl font-semibold">MY SKILLS AND SERVICES</h2>
        <p className="mt-4 text-gray-400">I specialize in HTML5, CSS3, JavaScript, and ReactJS.</p>
        <div className="flex justify-center mt-4 space-x-4">
          {["HTML", "CSS", "JavaScript", "React", "UI design"].map((skill, index) => (
            <motion.span 
              key={index} 
              whileHover={{ scale: 1.2 }} 
              className="bg-gray-800 px-4 py-2 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>
  )
}
