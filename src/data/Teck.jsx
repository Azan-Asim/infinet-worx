// Import React and CSS
import React from 'react';
import '../css/Teck.css';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Supersetion = () => {
  return (
    <>
    <div className="main-container">
      <div className="img">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="work1">
        <h1>
        <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 0.1, delay: 0.4 }}
          >
          Illuminating true<br /></motion.span>
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
          > human purpose<br /></motion.span>
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
          > through technology</motion.span> 
         
          </h1>
      </div>
    </div>
    
    </>
  );
};

export default Supersetion;
