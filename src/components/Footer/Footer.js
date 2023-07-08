import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Фильм произведен при сотрудничестве Французких и Американских
          кинокомпаний
        </p>
        <p>email режисера: Louis.Leterrier@gmail.com</p>
        <p>
          Отзывы о картине можно остасить здесь: NowYouSeeMe.cinema@gmail.com
        </p>
      </footer>
    );
  }
}

export default Footer;
