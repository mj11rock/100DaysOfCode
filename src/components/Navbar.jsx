import React from "react";
import "../styles/scss/main.scss";
import navLogo from "../img/100days.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <nav
      className="nav-wrapper blue darken-3"
      data-aos="zoom-in-left"
      data-aos-anchor-placement="center-center"
    >
      <div className="container ">
        <a className="brand-logo">
          <img data-aos="fade-up" src={navLogo} className="nav-logo" alt="" />
        </a>
        <ul className="right hide-on-med-and-down" data-aos="zoom-in-up">
          <li data-aos="fade-up" data-aos-duration="400">
            <AnchorLink href="#start">О Себе</AnchorLink>
          </li>
          <li data-aos="fade-up" data-aos-duration="500">
            <AnchorLink href="#projects">Проекты</AnchorLink>
          </li>
          <li data-aos="fade-up" data-aos-duration="600">
            <AnchorLink href="#contacts">Контакты</AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
