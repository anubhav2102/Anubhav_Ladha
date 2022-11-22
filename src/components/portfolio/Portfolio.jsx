import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2 (1).png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/Anubhav_Ladha" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://anubhav2102.github.io/Anubhav_Ladha/" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Xpreso - Groceries and more...</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/expreso" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://expreso-om6mhkcza-anubhav2102.vercel.app/" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>CheckMate - Your Mate At Ease</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/CheckMate" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://technext.github.io/eflyer/index.html?_ga=2.251088128.782290416.1669101286-550564208.1669101286" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>i-notes App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/i-NotesApp" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://github.com/anubhav2102/i-NotesApp" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Winter School</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/Winter-School.github.io" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://anubhav2102.github.io/Winter-School.github.io/" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>TextUtils</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/anubhav2102/textutils" className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href="https://anubhav2102.github.io/" className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio