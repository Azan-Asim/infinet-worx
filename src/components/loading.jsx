// Loading.js
import React, { useState, useEffect } from 'react';
import '../css/loading.css';

const Loading = () => {
  const [count, setCount] = useState(0);
  const [per, setPer] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const loading = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(loading);
          setIsCompleted(true);
          return 100;
        }
        return prevCount + 1;
      });

      setPer((prevPer) => (prevPer >= 400 ? 400 : prevPer + 4));
    }, 20);

    return () => clearInterval(loading);
  }, []);

  return (
    <div className="loading">
      <div className="percent">{count}<span>%</span></div>
       {isCompleted && <div className="text">Completed</div>} 
       <div className="progress-bar">
        <div className="progress" style={{ width: `${per}px` }}></div>
      </div> 
    </div>
  );
};

export default Loading;
