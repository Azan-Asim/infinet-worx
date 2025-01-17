import React, { useEffect } from 'react';
import '../css/Ai.css';
import Swiper from 'swiper';
import 'swiper/css';


function App() {

  useEffect(() => {
    // Swiper initialization
    const j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: '.tc-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.listing-carousel-button-next',
        prevEl: '.listing-carousel-button-prev',
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      }
    });

    // FAQ toggle functionality
    document.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.classList.contains('open');

        // Close all FAQ items
        document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
        document.querySelectorAll('.faq-header').forEach(h => h.classList.remove('open'));
        document.querySelectorAll('.faq-header span').forEach(icon => icon.textContent = '+');

        // Open the clicked FAQ item if not already open
        if (!isOpen) {
          body.classList.add('open');
          header.classList.add('open');
          header.querySelector('span').textContent = '-';
        }
      });
    });

    return () => {
      // Cleanup Swiper and event listeners if component is unmounted
      if (j2) {
        j2.destroy();
      }
    };

  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="content">
          <h1>AI Development Services</h1>
          <p>
            Explore limitless possibilities with our AI development services.
            Our AI solutions are here to drive innovation, efficiency, and success in your business endeavors.
          </p>
          <div className="button">
            <a href="#">Let's Connect</a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="content1">
            <h1>
              <img src="./icon.webp" alt="Logo" className="logo" />
              Excel in Emerging Tech with Our AI Services
            </h1>
            <p>
              Embark on Your AI Journey with Xeven Solutions, Your Premier AI Software Development Company. We provide comprehensive AI development services, from ideation to seamless integration into your infrastructure. Our expertise extends to AI in healthcare and refining foundational models like GPT tailored to your business needs. 
              <br />
              With our holistic AI as a service, we don’t just create AI solutions; we lay the foundation for your business’s sustainable success in the age of AI. Whether it’s automating tasks or enhancing customer experiences we’re here to empower your journey.
            </p>
            <div className="button">
              <a href="#">Schedule a Demo</a>
            </div>
          </div>
          <div className="image-container">
            <img src="./image.webp" alt="AI Technology" className="tech-image" />
          </div>
        </div>
      </section>

      {/* Testimonials Section (Swiper Carousel) */}
      <section className="section">
        <div className="conten">
          <h1><img src="./icon.webp" alt="Logo" className="logo" />Industries We Serve</h1>
        </div>
        <div className="testimonials-carousel-wrap">
          <div className="listing-carousel-button listing-carousel-button-next"><i className="fa fa-caret-right" style={{ color: '#fff' }}></i></div>
          <div className="listing-carousel-button listing-carousel-button-prev"><i className="fa fa-caret-left" style={{ color: '#fff' }}></i></div>
          <div className="testimonials-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {[...Array(6)].map((_, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="testi-item">
                      <div className="testi-avatar"><img src="./heart.png" alt="avatar" /></div>
                      <div className="testimonials-text">
                        <h1>Smart Healthcare</h1>
                        <p>Transforming healthcare through innovation, our AI software development services cater to the smart healthcare sector. We focus on crafting cutting-edge AI solutions tailored to healthcare's unique needs.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tc-pagination"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="faq">
          <div className="faq-header">
            <h3>What is AI Development?</h3>
            <span>+</span>
          </div>
          <div className="faq-body">
            <p>AI Development involves the creation of intelligent systems that can perform tasks typically requiring human intelligence, such as learning, problem-solving, and decision-making.</p>
          </div>

          <div className="faq-header">
            <h3>How does AI improve businesses?</h3>
            <span>+</span>
          </div>
          <div className="faq-body">
            <p>AI helps businesses automate tasks, analyze large datasets for insights, and enhance customer experiences through personalized services.</p>
          </div>

          {/* Add more FAQ items as needed */}
        </div>
      </section>

    </div>
  );
}

export default App;
