import React from "react";
import { Link } from "react-router-dom";

import truck from "../imgs/small-truck.png";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <section className="about-content-container">
        <img
          src={truck}
          alt="semi-truck"
          className="small-truck"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="800"
        />
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
          About us
        </h1>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
          We have been delivering in Central Coast, California for over two
          decades. Over that time, we have been expanded our services to an even
          greater area of California. From San Diego all the way to San
          Fransisco and beyond.{" "}
        </p>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
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
