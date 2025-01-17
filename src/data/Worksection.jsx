import React from 'react';
import '../css/Woeksection.css';
import { motion } from 'framer-motion'; // Import motion from framer-motion
const WorkSection = () => {
    return(
    <section className="work">
      <section className="img2">
        <img className='logo' src="./logo.png" alt="" />
      </section>
      <h1><motion.span
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.1, delay: 0.7 }}
>
How does<br /></motion.span>
<motion.span
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
>Infinetworx </motion.span>
<motion.span
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
> work?</motion.span>
</h1>
      <div className="work-par">
      <motion.p
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.1, delay: 0.7 }}
>INFINETWORS is built for peer-to-peer</motion.p>
<motion.p
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.3, delay: 0.7 }}
> coordination, shared ownership and the</motion.p>
<motion.p
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
>   formation of communities around</motion.p>
<motion.p
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ ease: "easeIn", duration: 0.5, delay: 0.7 }}
>   physical and digital property. </motion.p>
        
       
      </div>
    </section>
)};
export default WorkSection;
