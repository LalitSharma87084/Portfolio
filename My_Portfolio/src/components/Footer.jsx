import React from 'react'
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <motion.footer 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5, delay: 1 }}
    className="text-center mt-16 py-8"
  >
    <div className="flex justify-center space-x-6">
      {["GitHub", "Twitter", "Medium"].map((platform, index) => (
        <motion.a 
          key={index} 
          whileHover={{ scale: 1.2, color: "#aaa" }}
          href="#"
          className="text-gray-400 hover:text-white"
        >
          {platform}
        </motion.a>
      ))}
    </div>
    <p className="mt-4 text-gray-600">© 2024 LalitSharma. All rights reserved.</p>
  </motion.footer>
  )
}

