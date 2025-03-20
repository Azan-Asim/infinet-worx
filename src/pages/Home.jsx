import React, { useState, useEffect } from 'react';
import '../css/Formless.css';
import Loading from '../components/loading.jsx';
import CardSection from '../components/CardSection.jsx'
import HeroSection from '../components/HeroSection.jsx';
import Navbar from '../components/Navbar.jsx';
// import Testimonial from '../data/Testimonial.jsx';
import TestimonialCom from '../components/TestimonialCom.jsx';
import ProfileSection1 from '../components/Profile.jsx';
import Footersection from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import AboutUs from '../components/About.jsx';
import Service from '../components/Service.jsx';
import WorkSection from '../components/Worksection.jsx';




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
          <AboutUs/>
          <Service/>
          <WorkSection/>
          <CardSection />
          <TestimonialCom/>
          <ProfileSection1 />
          {/* <Testimonial/> */}
        <Contact/>
          <Footersection/>
        </div>
      )}
    </>
  );
};

export default Home;
