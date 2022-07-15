import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>4 Star (Max Rating - 1866) on Codechef</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved more than 700 Questions on different coding platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Google Kickstart 2022 - Round D (Rank - 2984), Round B (Rank - 4739)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Google Codejam 2022 Qualified with 31 pts and Round 1 (Rank - 8675)</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>ML and Blockchain</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
