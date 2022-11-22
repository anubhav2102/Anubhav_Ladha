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
              <p>Specialist (Max Rating - 1455) on Codeforces</p>
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
              <p>Google Codejam 2022 - Qualification Round (scored 24 pts), 1st Round (Rank - 8768th)</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
              <p>Conducted offline/online drive for starting Competitive Programming and Data Structures/Algorithms.</p>
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
              <p>Learnt basic HTML,CSS,JS in first semester.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understood the concepts of backend in node.js, express.js and mongoDB and made a simple project in 2nd semester.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basics of React and simple UI based on it in 3rd Semester, also got an internship at a startup Code8 as full stack developer.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built some good react based projects using redux.js, hooks and many other implementation in 4th semester.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed another internship at Bagcampus private limited(React Developer intern) for 2 months after 4th sem break.</p>
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
              <p>Learnt python basics in 3rd semester.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built some simple games using basic libraries.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learnt numpy, pandas, matplotlib for statistical method with linear and mutliple regression in 4th semester.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Made a house price prediction project which considers multiple factors for statistical analysis. Now, working on a model which detects fake websites/photos/videos under professor Dr. Pallabhi Saikia.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learnt solidity, cryptography and WEB3 applications to make a web3 App which is a clone for twitter 3.0.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services