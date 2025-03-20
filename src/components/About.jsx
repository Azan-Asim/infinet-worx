import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const fadeIn = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  // };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } }
  };

  return (
    <section className="about-container" id="about">
      {/* <motion.div className="about-heading" variants={fadeIn} initial="hidden" animate="visible">
        <i className="bx bxs-user about-icon"></i>
       
      </motion.div> */}

      <motion.div className="about-content" variants={slideIn} initial="hidden" animate="visible">
        <div className="about-text">
        <h2 className="about-heading">About <span>Us</span></h2>
          <p>
          At Infinet Worx, we empower businesses with secure, innovative, and scalable technology solutions. Our team of experts 
          combines deep industry knowledge with cutting-edge digital tools to drive efficiency, growth, and transformation. <br /> <br />
From strategy to implementation, we deliver end-to-end solutions, including custom software development, mobile applications,
 cloud services, and digital transformation strategies. With a commitment to reliability and innovation, we help organizations
  navigate the evolving technology landscape with confidence.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@infinetworx.co">info@infinetworx.co</a></p>
            <p><strong>Location:</strong> Level 3 KL Gateway 59200 Kuala Lumpur Malaysia</p>
            <p><strong>Phone:</strong> <a href="tel:+62329358176">+6 23 2935 8176</a></p>
          </div>

          <motion.a href="resume" className="about-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Resume &gt;
          </motion.a>
        </div>

        <motion.div className="about-img-container" variants={imageAnimation} initial="hidden" animate="visible">
          <img src="./about/why-us.png" alt="Company profile" className="about-img" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .about-container {
          width: 100%;
          height: auto;
          padding: 100px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
        }

        .about-heading {
         
          color: #F48F5D;
          font-size: 36px;
          font-weight: 800;
        }

        .about-icon {
          color: #F48F5D;
          font-size: 45px;
          margin-right: 10px;
        }

        .about-heading h2 span {
          color: #F48F5D;
        }

        .about-content {
          display: flex;
          flex-direction: ${windowWidth < 895 ? 'column' : 'row'};
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          width: 100%;
          gap: 40px;
        }

        .about-text {
          width: ${windowWidth < 895 ? '100%' : '50%'};
          color: black;
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
          padding: 0 20px;
        }

        .about-text h5 {
          color: white;
          font-size: 20px;
          margin-top: 20px;
          letter-spacing: 2px;
        }

        .contact-info {
          margin-top: 20px;
          font-size: 14px;
        }

        .contact-info a {
          color: #F48F5D;
          text-decoration: none;
          margin-left: 5px;
        }

        .about-btn {
          display: inline-block;
          padding: 8px;
          background-color: #F48F5D;
          border-radius: 1.5rem;
          font-size: 20px;
          color: black;
          font-weight: 600;
          margin-top: 20px;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
        }

        .about-img-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${windowWidth < 895 ? '100%' : '50%'};
          height: auto;
        }

        .about-img {
          width: 100%;
          max-width: 500px;
          object-fit: cover;
          // border-radius: 15px;
          // box-shadow: 0 4px 10px rgba(255, 78, 48, 0.2);
        }

        @media (max-width: 895px) {
          .about-text {
            text-align: center;
          }
          .about-btn {
            font-size: 1.4rem;
            padding: 0.8rem 2rem;
          }
          .about-img-container {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
