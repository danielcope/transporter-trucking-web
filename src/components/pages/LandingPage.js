import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../AboutSection";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing-page">
      <section id="top-landing" className="top-landing">
        <Link className="contact-link" to="/contactpage">
          Contact us
        </Link>
        <header>
          <section className="title-container">
            <div className="rt-logo"></div>
            <h1>Roadrunners Trucking</h1>
          </section>
          <h3>Serving California since 1998</h3>
        </header>
      </section>
      <AboutSection />
    </section>
  );
};

export default LandingPage;
