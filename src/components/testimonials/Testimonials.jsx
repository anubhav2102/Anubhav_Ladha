import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/shrey_sir.jpg'
import AVTR1 from '../../assets/Prabal.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'Shrey Bhagat - Product Designer (Postman)',
    review: 'Collaborates with internal and external teams across positions, proactively helps others, puts team targets higher than personal achievements, contributes and takes initiative to social activities'
  },
  {
    avatar: AVTR1,
    name: 'Prabal Dev Sharma (UX Enthusiast)',
    review: 'Create, maintain, audit, and improve systems to meet particular needs. Continuously update new coding knowledge.'
  },
  {
    avatar: '',
    name: 'Pranav Jadhav - Software Developer (IBM)',
    review: 'Help create a good atmosphere and working environment, accepts constructive criticism, follows standards.'
  },
  {
    avatar:'',
    name: 'Vipul Shah - Senior Developer (PayPal - Bay Area, San Francisco)',
    review: 'Propose/use digital technologies to change internal processes,  generates ideas and gives input that makes our product more efficient '
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