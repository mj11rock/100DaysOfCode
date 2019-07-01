import React from "react";
import "../styles/scss/main.scss";
import navLogo from "../img/100days.png";

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container ">
        <a className="brand-logo">
          <img src={navLogo} className="nav-logo" alt="" />
        </a>
        <ul className="right">
          <li>
            <a href="#">О Себе</a>
          </li>
          <li>
            <a href="#">Проекты</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
