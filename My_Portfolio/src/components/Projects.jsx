import React from 'react'
import { motion } from "framer-motion";


export default function Projects() {
  return (
    <motion.section className="mt-16 px-8">
    <h2 className="text-2xl font-semibold">MY PROJECTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {["📊 Project 1", "📱 Project 2", "📷 Project 3"].map((project, index) => (
        <motion.div 
          key={index}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-gray-800 p-4 rounded-md"
        >
          {project}
        </motion.div>
      ))}
    </div>
  </motion.section>
  )
}

