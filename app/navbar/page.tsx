"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";
import React, { useState } from "react";
import "./nav.css";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Image src={logo} alt="logo" className="logo " />
      <div className="desktopMenu">
        <Link
          href='#intro'
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          href='#skills'
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          href='#works'
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          href='#contact'
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <Link href='#contact' className="desktopMenuBtn">
        <Image src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>

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
        <Link
          href='#intro'
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          href='#skill'
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          href='#works'
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          href='#contact'
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
      </div>
    </nav>
  );
}
