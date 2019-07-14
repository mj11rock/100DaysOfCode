import React from "react";
import profile from "../img/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "materialize-css/dist/css/materialize.css";

const About = () => {
  return (
    <div
      className="about-wrapper container"
      id="start"
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <h3 className="center font-highlight bold">Обо мне</h3>
      <h5 className="center font-standart">Если Вам интересно кто я</h5>

      <div className="main-content row">
        <div className="col-sm-12 col-md-3 col-12 center">
          <img src={profile} className="profile-pic" alt="" />
        </div>
        <div className="info col-sm-12 col-md-9 col-12">
          <p>
            {" "}
            Я, <span className="font-highlight">Исломбек Салимов</span> и мне 22
            года.{" "}
          </p>
          <p>
            {" "}
            С 16 Марта я начал челлендж{" "}
            <span className="font-highlight">100 Days of code</span>. Начал с
            самых основ HTML, CSS, JAVASCRIPT.
          </p>
          <p>
            Первые две недели ушли на повторение, дальше путь продолжился с уже
            новым материалом. Нашел готовый{" "}
            <a
              href="https://github.com/nas5w/100-days-of-code-frontend"
              className=""
            >
              план
            </a>{" "}
            обучения, который очень помогал мне не думать{" "}
            <span className="bold">"Что же дальше?!"</span>.
          </p>
        </div>
        <div className="col-12">
          <p>
            Путь был непрост, но в тоже время очень интересен. Я бросил{" "}
            <span className="font-highlight">вызов </span>
            самому себе, <span className="font-highlight">поспорил </span> сам с
            собой, что смогу дойти до конца, не сдаваясь и не отпуская руки.
            Каждый день я садился изучать что-то новое, либо поторить что-то
            пройденное. И каждый пройденный день выкладывал в{" "}
            <a href="https://www.instagram.com/is_100dys/">инстаграм</a>.
          </p>
          <p>
            За эти 100 дней я познакомился с{" "}
            <span className="font-highlight">
              jQuery, Git, Sass, BEM, Node & npm, Webpack, ESLint, React, Redux,
              NextJS.{" "}
            </span>
            Начал понимать JavaScript на другом уровне. Ежедневное писание кода
            дало мне понимание и самого программирования в целом.
          </p>
          <p>
            Так как лучший метод изучения - это практика, следующий{" "}
            <AnchorLink href="#practice">раздел</AnchorLink> будет с моими
            работами, которые я делал походу прохождения челленджа.{" "}
          </p>
          <h4 className="font-highlight">Следующий челлендж</h4>
          <p>
            Конечно же на этих 100 днях я не закончу. Следующий челлендж я начну
            уже с чистым языком программирования, выбор пока что между{" "}
            <span className="font-highlight">Python</span> и
            <span className="font-highlight"> C#</span>. Но я, скорее, выберу
            Python из-за его популярности и простоты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
