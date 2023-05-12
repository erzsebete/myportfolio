import React from "react";
import "./Testimonials.css";
import education from "../data/education";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Education = () => {
  return (
    <section id="testimonials">
      <h5>My Journey</h5>
      <h2>Skill Development</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {education.map((item) => {
          return (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt={item.name + item.id} title={item.place}/>
              </div>
              <h4>{item.name}</h4>
              <h6>{item.time}</h6>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
