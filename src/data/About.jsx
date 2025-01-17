import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const baseStyles = {
    container: {
      width: '100%',
      padding: '150px 0',
    },
    heading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '36px',
      fontWeight: 800,
      color: '#ffffff',
      textShadow: '0 0 25px #F48F5D',
    },
    headingIcon: {
      color: '#F48F5D',
      fontSize: '45px',
      marginRight: '10px',
    },
    main: {
      width: '1130px',
      maxWidth: '95%',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    imgContainer: {
      position: 'relative',
      marginBottom: '130px',
      width: '500px',
      height: '400px',
      borderRadius: '30px',
      boxShadow: '0 0 25px #F48F5D',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
      transition: 'filter 0.5s, box-shadow 0.5s',
    },
    aboutText: {
      width: '550px',
      color: 'rgb(202, 199, 199)',
      letterSpacing: '1px',
      lineHeight: '28px',
      fontSize: '18px',
      marginBottom: '45px',
      textAlign: 'justify',
    },
    btn: {
      display: 'inline-block',
      padding: '1rem 2.5rem',
      backgroundColor: '#F48F5D',
      boxShadow: '0 0 25px #F48F5D',
      borderRadius: '1.5rem',
      fontSize: '1.6rem',
      color: 'black',
      border: '2px solid transparent',
      letterSpacing: '0.1rem',
      fontWeight: 600,
      transition: '0.3s ease-in-out',
      cursor: 'pointer',
      marginTop: '20px',
    },
    contactInfo: {
      marginTop: '10px',
      marginBottom: '20px',
      fontSize: '16px',
      color: '#fff',
    },
    link: {
      color: '#F48F5D',
      textDecoration: 'none',
      marginLeft: '5px',
    },
  };

  const getResponsiveStyles = () => {
    if (windowWidth < 575) {
      return {
        main: {
          flexDirection: 'column',
          padding: '0 10px',
        },
        heading: {
          ...baseStyles.heading,
          marginBottom: '50px',
          textAlign: 'center',
        },
        imgContainer: {
          ...baseStyles.imgContainer,
          marginBottom: '20px',
        },
        aboutText: {
          ...baseStyles.aboutText,
          fontSize: '14px',
          lineHeight: '22px',
          width: '100%',
          padding: '0 10px',
        },
        btn: {
          ...baseStyles.btn,
          fontSize: '1.4rem',
          padding: '0.4rem 1rem',
        },
      };
    } else if (windowWidth < 895) {
      return {
        main: {
          flexDirection: 'column',
          padding: '0 20px',
        },
        heading: {
          ...baseStyles.heading,
          fontSize: '28px',
        },
        aboutText: {
          ...baseStyles.aboutText,
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'justify',
        },
        btn: {
          ...baseStyles.btn,
          fontSize: '1.4rem',
        },
      };
    } else if (windowWidth < 921) {
      return {
        main: {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        },
        img: {
          maxWidth: '400px',
          width: '100%',
        },
      };
    } else if (windowWidth < 1285) {
      return {
        main: {
          flexDirection: 'row',
        },
      };
    }
    return { main: {} };
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <section style={baseStyles.container} id='about'>
      <div style={baseStyles.heading}>
        <i className='bx bxs-user' style={baseStyles.headingIcon} aria-label="User Icon"></i>
        <h2>About <span style={{ color: '#F48F5D' }}>Us</span></h2>
      </div>

      <div style={{ ...baseStyles.main, ...responsiveStyles.main }}>
        <div style={baseStyles.imgContainer}>
          <img
            src="./meeting.png"
            alt="Abuzar's profile image during a meeting"
            style={baseStyles.img}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>

        <div style={{ ...baseStyles.aboutText, ...responsiveStyles.aboutText }}>
          <p>
            At [Your Software House Name], we're passionate about leveraging technology to build powerful, intuitive
            solutions that drive business success. Since our inception, we’ve been dedicated to helping clients across
            industries harness the potential of cutting-edge software and digital tools. Our talented team of developers,
            designers, and strategists brings deep expertise and innovative thinking to every project, delivering
            high-quality, reliable, and scalable software solutions.
          </p>

          <h5 style={{ color: 'white', letterSpacing: '2px', fontSize: '30px', marginBottom: '5px' }}>What We Are</h5>
          <p>
            We are a diverse group of technology enthusiasts, problem-solvers, and creative minds committed to making a
            difference. Our team combines years of experience with fresh perspectives, ensuring that every solution is
            crafted to meet the unique needs of each client. We pride ourselves on our collaborative approach, transparency,
            and commitment to excellence.
          </p>

          <h5 style={{ color: 'white', letterSpacing: '2px', fontSize: '30px', marginBottom: '5px' }}>What We Do</h5>
          <p>
            From custom software development and mobile applications to cloud solutions and digital transformation strategies,
            we offer a comprehensive range of services to help businesses thrive in a digital world. Our process begins with
            understanding your goals and challenges, enabling us to design solutions that align with your vision and provide
            measurable results.
          </p>

          <div style={baseStyles.contactInfo}>
            <p><strong>Email:</strong> <a href="mailto:info@infinetworx.co" style={baseStyles.link}>info@infinetworx.co</a></p>
            <p><strong>Location:</strong> Level 3 KL Gateway 59200 Kuala Lumpur Malaysia</p>
            <p><strong>Phone:</strong> <a href="tel:+62329358176" style={baseStyles.link}>+6 23 2935 8176</a></p>
          </div>

          <div className="btn-group1">
            <a href="#" style={baseStyles.btn}>Resume &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
