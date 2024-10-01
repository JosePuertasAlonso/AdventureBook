import React from "react";

import { motion } from "framer-motion";

const ButtonAnimated = ({ text, onClick, bgColor, fontColor = 'white', icon}) => {
  return (
    <motion.button
      className="Btn-animated"
      style={{ backgroundColor: bgColor, color: fontColor,  }}
      onClick={onClick}
    >
      <motion.div className="sign">
        {icon}
      </motion.div>

      <motion.div className="text" style={{color: fontColor}}>{text}</motion.div>
    </motion.button>
  );
};
export default ButtonAnimated;
