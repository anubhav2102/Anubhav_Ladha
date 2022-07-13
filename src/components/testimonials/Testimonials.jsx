import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/2.jpeg'
// import AVTR from '../../assets/2.jpeg'
// import AVTR from '../../assets/2.jpeg'
// import AVTR from '../../assets/2.jpeg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit atque maiores ut ullam. Illo quaerat distinctio voluptates, tenetur modi facilis autem dolore.'
  },
  {
    avatar: AVTR,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit atque maiores ut ullam. Illo quaerat distinctio voluptates, tenetur modi facilis autem dolore.'
  },
  {
    avatar: AVTR,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit atque maiores ut ullam. Illo quaerat distinctio voluptates, tenetur modi facilis autem dolore.'
  },
  {
    avatar:AVTR,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit atque maiores ut ullam. Illo quaerat distinctio voluptates, tenetur modi facilis autem dolore.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt=""/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials