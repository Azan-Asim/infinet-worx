import React from 'react';
import '../css/Service.css'; // Assuming you renamed cccccc.css to App.css for convention


// Heading Component
function Heading() {
  return (
    <>
    <div className="heading">
      <h1>We are Providing Best Services</h1>
      <p>Our unique approach towards services and projects is by creating Workforce as partners rather than employees.</p>
    </div>
   
    </>
  );
}

// ServiceCard Component for each service box
function ServiceCard({ title, subtitle, description }) {
  return (
    <div className="box">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
}

// Mission Component containing all service cards
function Mission() {
  return (
    <div className="mission">
      <div className="container1">
        <ServiceCard title="Technology" subtitle="Services" description="Designed to facilitate the use of technology by enterprises and end-users specializing in various fields." />
        <ServiceCard title="Artificial" subtitle="Technology" description="Artificial Technology refers to the simulation of human intelligence in machines and applications that are programmed." />
        <ServiceCard title="Outsourced" subtitle="Development" description="Provide Outsourced product development (OPD) is a practice in which we organize hires." />
        <ServiceCard title="Robotic" subtitle="Process Automation" description="Provide Robotic process automation to configure computer software or a robot to emulate and help." />
        <ServiceCard title="Application" subtitle="Transition Services" description="Provides solutions to protect networks, devices, and data from unauthorized access or criminal use." />
        <ServiceCard title="Data" subtitle="Analysis" description="Helping businesses make informed decisions by analyzing trends and patterns in data." />
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className='services-main'>
      <Heading />
      <Mission />
    </div>
  );
}

export default App;
