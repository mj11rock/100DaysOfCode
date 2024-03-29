import React from "react";
import bg from "../img/welcomeBg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

const Welcome = () => {
  return (
    <div className="container welcome-wrapper" data-aos="fade-up">
      <div
        className="container"
        data-aos="zoom-in-right"
        data-aos-duration="450"
      >
        <p className="font-standart">Привет,</p>
        <span className="font-standart">Я, </span>{" "}
        <span className="font-highlight bold">Исломбек Салимов</span>
        <div className="participant">
          <span className="font-standart">Участник </span>
          <span className="font-highlight">#100daysofcode</span>
        </div>
        <AnchorLink href="#start" className="btn">
          Обо мне
        </AnchorLink>
      </div>
      <div className="bg" data-aos="fade-right" data-aos-duration="500">
        <img src={bg} alt="" />
      </div>
      <div className="arrowdown">
        <AnchorLink href="#start">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className="svg-inline--fa fa-chevron-down fa-w-14 scrollDown__StyledIcon-sc-11jmwtl-1 haUUnJ"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            />
          </svg>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Welcome;
