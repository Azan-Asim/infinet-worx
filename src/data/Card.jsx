import React from 'react';
import '../css/Card.css';
const Card = ({ image, title, description, alt }) =>{
  return (
    
    <div className="card">
    <div className="image-section">
      <img src={image} alt={alt} />
    </div>
    <div className="text-section">
      <h6><span>{title}</span></h6>
      <p>{description}</p>
      <a href="#" className="buttons">Learn More <i className="fa-solid fa-arrow-turn-down"></i></a>
    </div>
  </div>
)}

export default Card;
