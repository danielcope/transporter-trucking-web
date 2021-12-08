import React from "react";
import { Link } from "react-router-dom";

import truck from "../imgs/small-truck.png";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <section className="about-content-container">
        <img src={truck} alt="semi-truck" className="small-truck" />
        <h1>About us</h1>
        <p>
          We have been delivering in Central Coast, California for over two
          decades. Over that time, we have been expanded our services to an even
          greater area of California. From San Diego all the way to San
          Fransisco and beyond.{" "}
        </p>
        <p>
          We would love to work with you. To find out more,{" "}
          <Link className="about-contact-link" to="/contactpage">
            contact us here.
          </Link>
        </p>
      </section>
    </section>
  );
};

export default AboutSection;
