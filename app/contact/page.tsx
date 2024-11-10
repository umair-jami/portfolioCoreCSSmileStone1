'use client'
import React, { useRef } from "react";
import "./contact.css";
import walmart from "../assets/walmart.png";
import facebook from "../assets/facebook.png";
import microsoft from "../assets/microsoft.png";
import adobe from "../assets/adobe.png";

import fbIcon from "../assets/facebook-icon.png";
import xIcon from "../assets/twitter.png";
import instaIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import Image from "next/image";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opporutnity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <Image src={walmart} alt="walmart" className="clientImg"/>
          <Image src={facebook} alt="facebook" className="clientImg"/>
          <Image src={microsoft} alt="microsoft" className="clientImg"/>
          <Image src={adobe} alt="adobe" className="clientImg"/>

        </div>
      </div>
      <div id="contact">
        <div className="contactPageTitle">Contact Me</div>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="contactForm" ref={form}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="your Email" name="your_email" />
          <textarea
            className="msg"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <Image src={fbIcon} alt="fbIcon" className="link"/>
            <Image src={xIcon} alt="xIcon" className="link"/>
            <Image src={youtubeIcon} alt="youtubeIcon" className="link"/>
            <Image src={instaIcon} alt="instaIcon" className="link"/>
          </div>
        </form>
      </div>
    </section>
  );
}
