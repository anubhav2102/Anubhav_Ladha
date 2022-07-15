import React from 'react'
import './about.css'
import ME from '../../assets/2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" height="520px" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Problem Solving</h5>
              <small>700+ Questions Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
          Hi , I'm a junior year student in computer science and engineering from Rajiv Gandhi Institute of Petroleum Technology - An Instititue of National Importance at par with IIT's.
I am competitive programming lead and Founder at CodeChef RGIPT chapter , website team and technical executive at E-CELL RGIPT , membership co-head at ACM RGIPT Student chapter.

I have a deep interest in C++ , data structures , algorithms and Web devlopment.
Currently, I am exploring my skills into competitive programming on platforms like codechef and codeforces.
I have completed my both backend and frontend stack with React and Node.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
