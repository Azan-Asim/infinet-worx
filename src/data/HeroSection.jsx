import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import '../css/Herosection.css';
import ImageSection from './Image';
import WorkSection from '../data/Worksection.jsx';
import App from '../data/Service.jsx';

const HeroSection = () => {
    return(
       <>
    <section className="hero-section" id='home'>
        <div className="video-container">
            <video autoPlay loop muted className="background-video">
                <source src="./video.mp4" type="video/mp4" />
            </video>
            <div className="content">
            <h1 className="hero-title">
              Welcome to the future of the internet
            </h1>
            <div className="hero-paragraph">
                <p>
                    INFINETWORX is a decentralized network and digital space that empowers individuals to connect, create, collaborate, and share in a multiplayer digital economy.
                </p>
             <div className="btn-container">
             <a href="starting" className="btn"> 
                  <span>  Get Started </span>
                    <FaArrowDown />
                </a>
             </div>
            </div>
            </div>
        </div>
    </section>
   
    <ImageSection/>
    <App/>
    <WorkSection/>
   </>
  )
}

export default HeroSection;
