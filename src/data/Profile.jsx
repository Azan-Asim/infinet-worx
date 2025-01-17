import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../css/Profile.css';
import Contact from '../data/Contact.jsx'


const ProfileSection1 = () => {
  return (
    <>
      <div className="profile-section">
        <div className="profile-info">
          <img src="./arham.jpeg" alt="Profile" />
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
          >
            <span>Arham</span> <br />Sarwar
          </motion.h2>
          <p>Founder, FORMLESS</p>
        </div>
        <div className="quote">
          <p>
        <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeIn", duration: 0.1, delay: 0.7 }}
          >  "The multiplayer digital economy empowers </motion.span>
           <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
          >   smaller players to unite—inviting would-be </motion.span>
        <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}>  
          consumers to become participants and bigger </motion.span>
          <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.6, delay: 0.7 }}>  
            players to become powerful platforms. It's the  </motion.span>
            <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.8, delay: 0.7 }}>  
            digital equivalent of the common property </motion.span>
            <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.9, delay: 0.7 }}>  
             rights that form corporations, but without  </motion.span>
             <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.9, delay: 0.7 }}>  
          the government contracts or physical property </motion.span>
           <motion.span
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{ ease: "easeIn", duration: 0.12, delay: 0.7 }}>  
           rights enforcement that make corporations possible." </motion.span>
           
         </p>
        </div>
      </div>
    <Contact/>
    </>
  );
};

export default ProfileSection1;
