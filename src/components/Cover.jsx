import React from "react";
import { motion } from "framer-motion";

import "../App.css";
const Cover = ({ setShowCover }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }} 
      className="cover" 
    >
      <div className="libro">
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "3rem",
            color: "#5c3d2e",
          }}
        >
          Mi Libro de Aventuras
        </h1>
        <button
          onClick={() => setShowCover(false)} // Al hacer clic, oculta la portada
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1.5rem",
            backgroundColor: "#8b5e3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Entrar en la Aventura
        </button>
      </div>
    </motion.div>
  );
};

export default Cover;
