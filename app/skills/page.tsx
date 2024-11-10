import React from 'react'
import './skills.css'
import SeoImg from '../assets/seoicon.png'
import devImg from '../assets/devIcon.png'
import responiveImg from '../assets/responsiveicon.png'
import Image from 'next/image'

export default function Skills() {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Hello! I'm Umair, a web developer skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js. I create visually appealing and user-friendly websites, focusing on both front-end design and seamless functionality. Let's build something amazing together and bring your vision to life!</span>
        <div className="skillBars">
        <div className="skillBar">
                <Image src={devImg} alt='devImg' className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Transforming ideas into fully functional, responsive websites using modern web technologies. From front-end design to back-end development, we create scalable, secure, and high-performing web solutions tailored to your business needs.</p>
                </div>
            </div>
            <div className="skillBar">
                <Image src={SeoImg} alt="seoImg" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>SEO</h2>
                    <p>Delivering user-centric design and SEO strategies for intuitive interfaces and improved digital presence. Let's enhance your visibility and create lasting connections with your audience.</p>
                </div>
            </div>
            <div className="skillBar">
                <Image src={responiveImg} alt="responiveImg" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Responsiveness</h2>
                    <p>  Specializing in cross-platform and native app development to ensure seamless user experiences. We focus on efficient, scalable, and feature-rich applications that align with your goals.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
