import React from "react";
import "./testimonials.css";
import avtr1 from "../../assets/avatar1.jpg";
import avtr2 from "../../assets/avatar2.jpg";
import avtr3 from "../../assets/avatar3.jpg";
import avtr4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avtr1,
    Name: "Ernest Achiever",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus doloremque nam, voluptate nihil laboriosam est eligendi voluptas. Distinctio perspiciatis soluta tempore cum delectus ratione hic cupiditate est error sit! Et!"
  },
  {
    avatar: avtr2,
    Name: "Ernest Achiever",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus doloremque nam, voluptate nihil laboriosam est eligendi voluptas. Distinctio perspiciatis soluta tempore cum delectus ratione hic cupiditate est error sit! Et!"
  },
  {
    avatar: avtr3,
    Name: "Ernest Achiever",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus doloremque nam, voluptate nihil laboriosam est eligendi voluptas. Distinctio perspiciatis soluta tempore cum delectus ratione hic cupiditate est error sit! Et!"
  },
  {
    avatar: avtr4,
    Name: "Ernest Achiever",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus doloremque nam, voluptate nihil laboriosam est eligendi voluptas. Distinctio perspiciatis soluta tempore cum delectus ratione hic cupiditate est error sit! Et!"
  }
]

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, Name, review}, index) =>{
            return (
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className="client__name">{Name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default testimonials;
