import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../AboutSection";
import GradientBackground from "../GradientBackground";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing-page">
      <section id="top-landing" className="top-landing">
        <div className="semi-truck"></div>
        <GradientBackground />
        <Link className="contact-link" to="/contactpage">
          Contact us
        </Link>
        <header>
          <section>
            <div className="rt-logo"></div>
            <h1>Roadrunners Trucking</h1>
          </section>
          <h3>Serving California since 1998</h3>
          <h5>Learn More &#8595;</h5>
        </header>
      </section>
      <AboutSection />
    </section>
  );
};

export default LandingPage;
