import React from 'react'
import './works.css'
import Portfolio1 from '../assets/portfolio-1.png'
import Portfolio2 from '../assets/portfolio-2.png'
import Portfolio3 from '../assets/portfolio-3.png'
import Portfolio4 from '../assets/portfolio-4.png'
import Portfolio5 from '../assets/portfolio-5.png'
import Portfolio6 from '../assets/portfolio-6.png'
import Image from 'next/image'

export default function Works() {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc"> I take pride in delivering high-quality work with a strong focus on attention to detail and client satisfaction. Explore my portfolio to see my dedication and expertise in action.</span>
        <div className="workImgs">
            <Image src={Portfolio1} alt="Portfolio1" className="workImg"/>
            <Image src={Portfolio2} alt="Portfolio2" className="workImg"/>
            <Image src={Portfolio3} alt="Portfolio3" className="workImg" />
            <Image src={Portfolio4} alt="Portfolio4" className="workImg" />
            <Image src={Portfolio5} alt="Portfolio5" className="workImg"/>
            <Image src={Portfolio6} alt="Portfolio6" className="workImg"/>
        </div>
        {/* <button className="workBtn">See More</button> */}
    </section>
  )
}
