"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";
import "./nav.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Image src={logo} alt="logo" className="logo " />
      <div className="desktopMenu">
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="desktopMenuListItem"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="works"
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopMenuListItem"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
          offset={-450}
        >
          Clients
        </ScrollLink>
      </div>
      <ScrollLink to="contact" smooth={true} duration={500} className="desktopMenuBtn">
        <Image src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </ScrollLink>

      <Image
        src={menu}
        alt="Menu"
        className="mobMenu desktopMenuImg"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="navMenu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="works"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </ScrollLink>
      </div>
    </nav>
  );
}
