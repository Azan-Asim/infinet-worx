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
            <h1>
                <span>Welcome to the<br /></span> 
                future<br /> of the internet
            </h1>
            <div className="par">
                <p>
                    INFINETWORX is a decentralized network and digital space that empowers individuals to connect, create, collaborate, and share in a multiplayer digital economy.
                </p>
                <a href="#" className="buttons">
                    Get Started <FaArrowDown style={{ color: "#ffffff", marginLeft: "15px" }} />
                </a>
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
