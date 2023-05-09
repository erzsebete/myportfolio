import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Nome",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officiis nostrum aut impedit corrupti esse! Illum iste delectus non deleniti vel dolores eius fugiat corrupti. 
    Eius, similique. Dolore beatae facere consectetur?`,
  },

  {
    id: 2,
    avatar: AVTR2,
    name: "Nome",
    review: `Officiis nostrum aut impedit corrupti esse! 
    Illum iste delectus non deleniti vel dolores eius fugiat corrupti. Eius, similique. Dolore beatae facere consectetur?`,
  },

  {
    id: 3,
    avatar: AVTR3,
    name: "Nome",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum aut impedit corrupti esse!
     Eius, similique. Dolore beatae facere consectetur?`,
  },

  {
    id: 4,
    avatar: AVTR4,
    name: "Nome",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum aut impedit corrupti esse! 
    Illum iste delectus non deleniti vel dolores eius fugiat corrupti. `,
  },
];

const Education = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt={item.name + item.id} />
              </div>
              <h5>{item.name + " " + item.id}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
