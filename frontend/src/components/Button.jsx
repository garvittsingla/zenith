import React,{ useState } from "react";
import { motion } from "framer-motion";


export default function SignupButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`px-6 py-2 rounded-xl font-semibold text-white 
        ${
          hovered
            ? "bg-gradient-to-r from-purple-600 to-indigo-500"
            : "bg-gradient-to-r from-indigo-500 to-purple-600"
        } shadow-lg transition-all duration-300`}
    >
      Get Started
    </motion.button>
  );
}
