import React from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination } from 'swiper/modules'; // Correct import path
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/TestimonialCom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Initialize Swiper modules
const swiperModules = [Navigation, Pagination];

const testimonials = [
  {
    id: 1,
    name: "Gilbert Stev",
    role: "Hiring Lawyer",
    rating: "★★★★★",
    comment: "Erin was proactive, attentive to feedback and interested in delivering a solid work-product. I’ll continue relying on her for work.",
  },
  {
    id: 2,
    name: "Christian Grosberg",
    role: "Independent",
    rating: "★★★★★",
    comment: "Very happy work with agency, so professional to take work and I feel amazing with this workspace. Do keep going and success now.",
  },
  // Add more testimonials here
];

const TestimonialComponent = () => {
  return (
    <div className="testimonial-section">
      <h1>Client Testimonials</h1>
      <p>Ensuring your digital work. Your trusted partner in data protection with writing-data solutions for comprehensive data security.</p>

      <Swiper
  spaceBetween={30}
  slidesPerView={1}
  navigation={{
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  }}
  pagination={{ clickable: true }}
  loop={true}
  modules={swiperModules}
  className="testimonial-slider"
>
  {testimonials.map((testimonial) => (
    <SwiperSlide key={testimonial.id}>
      <div className="testimonial-card">
        <div className="rating">{testimonial.rating}</div>
        <p className="comment">{testimonial.comment}</p>
        <div className="author">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </SwiperSlide>
  ))}
  <div className="swiper-button-prev">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
  <div className="swiper-button-next">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
</Swiper>
    </div>
  );
};

export default TestimonialComponent;
