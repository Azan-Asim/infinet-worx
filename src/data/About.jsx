import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

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
      <motion.div className="about-heading" variants={fadeIn} initial="hidden" animate="visible">
        <i className="bx bxs-user about-icon"></i>
        <h2>About <span>Us</span></h2>
      </motion.div>

      <motion.div className="about-content" variants={slideIn} initial="hidden" animate="visible">
        <div className="about-text">
          <p>
            At <b>Infinet Worx</b>, we're passionate about leveraging technology to build powerful,
            intuitive solutions that drive business success. Since our inception, we’ve been
            dedicated to helping clients across industries harness the potential of cutting-edge
            software and digital tools.
          </p>

          <h5>What We Are</h5>
          <p>
            We are a diverse group of technology enthusiasts, problem-solvers, and creative minds committed to making a
            difference. Our team combines years of experience with fresh perspectives, ensuring every solution meets
            the unique needs of each client.
          </p>

          <h5>What We Do</h5>
          <p>
            From custom software development and mobile applications to cloud solutions and digital transformation strategies,
            we offer a comprehensive range of services to help businesses thrive in a digital world.
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
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #121212;
        }

        .about-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 36px;
          font-weight: 800;
          text-shadow: 0 0 25px #F48F5D;
          margin-bottom: 40px;
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
          color: rgb(202, 199, 199);
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
          padding: 1rem 2.5rem;
          background-color: #F48F5D;
          box-shadow: 0 0 25px #F48F5D;
          border-radius: 1.5rem;
          font-size: 1.6rem;
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
