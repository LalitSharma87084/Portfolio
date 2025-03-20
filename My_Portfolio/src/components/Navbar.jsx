import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 left-0 text-white   backdrop-blur-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">

        <div className="text-lg md:text-2xl font-bold text-white">
          sharmalalit.work@gmail.com
        </div>

        <ul className="hidden md:flex items-center text-white gap-8">
          {["Home", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#aaa" }}
              className="cursor-pointer text-white"
            >
              <h3>{item}</h3>
               
              
            </motion.li>
          ))}
        </ul>

      
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
          className="border border-white px-5 py-2 rounded-full hidden md:block text-white"
        >
          Hire Me
        </motion.button>

      
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center py-4 space-y-4 bg-opacity-90"
        >
          {["Home", "Projects", "Contact"].map((item, index) => (
            <Link 
              key={index} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="text-white text-lg hover:text-gray-300 transition duration-300" 
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            className="border border-white px-5 py-2 rounded-full text-white"
          >
            Hire Me
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
}
