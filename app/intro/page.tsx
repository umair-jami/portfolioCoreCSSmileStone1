import React from "react";
import "./intro.css";
import bg from "../assets/image.png";
import btnImg from "../assets/hireme.png";
import Image from "next/image";
export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Umair</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled web developer with experience in creating <br />
          visually appealing and user-friendly websites.
        </p>

        {/* Update this button to trigger the download */}
        <a href="/Umair-Jami-Resume.pdf" download="Umair-Jami-Resume.pdf">
          <button className="btn">
            <Image src={btnImg} alt="CV" className="btnImg"/>
            Download CV
          </button>
        </a>
      </div>
    
      <Image src={bg} alt="portfolio" className="bg"/>
    </section>
  );
}
