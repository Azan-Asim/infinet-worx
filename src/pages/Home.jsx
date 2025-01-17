import React, { useState, useEffect } from 'react';
import '../css/Formless.css';
import Loading from '../data/loading.jsx';
import CardSection from '../data/CardSection.jsx'
import HeroSection from '../data/HeroSection.jsx';
import { motion } from "framer-motion";
import Navbar from '../data/Navbar.jsx';
import WorkSection from '../data/Worksection.jsx';
import Supersetion from '../data/Teck.jsx';
import ImageSection from '../data/Image.jsx'
import ProfileSection1 from '../data/Profile.jsx';
import Footersection from '../data/Footer.jsx'
import App from '../data/Service.jsx';
import Contact from '../data/Contact.jsx'
import AboutUs from '../data/About.jsx';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <CardSection />
          <ProfileSection1 />
          <Footersection/>
        </div>
      )}
    </>
  );
};

export default Home;
