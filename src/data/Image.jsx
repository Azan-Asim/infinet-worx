import React from 'react'
import '../css/Image.css';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import AboutUs from './About';

const ImageSection = () => {
  return (
    <>
    <section className="container">
      <div className="img">
        <img src="./logo.png" alt="FORMLESS" />
      </div>
    
      <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
          >INFINETWORX</motion.h1>
      
    </section>
    <AboutUs/>
    </>
  )
}


export default ImageSection