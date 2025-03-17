import React from 'react';
import '../css/Footer.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedinIn, faInstagram, faDiscord, faGithub, faArrowDown);

const Footersection = () => {
  return (
    <div className="footer">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="./video.mp4" type="video/mp4" />
        </video>
        <div className="content1">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
          >
            Join the network today.
          </motion.h1>
          <a href="#" className="buttons">
            Get Started <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '15px' }} />
          </a>

          <div className="link-row">
            <div className="main-links">
              <a href="#" className="link">Developer & Companies</a>
              <a href="#" className="link">Creature</a>
              <a href="#" className="link">About Us</a>
              <a href="#" className="link">Contact</a>
            </div>
            <div className="social-links">
              <a href="#" className="link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="link"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="link"><FontAwesomeIcon icon={faDiscord} /></a>
              <a href="#" className="link"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>

          <section className="container">
            <div className="img">
              <img src="./logo.png" alt="FORMLESS" />
            </div>
            <h1>INFINETWORX</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footersection;