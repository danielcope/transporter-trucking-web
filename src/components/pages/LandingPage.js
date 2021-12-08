import React from "react";
import { Link } from "react-router-dom";
import GradientBackground from "../GradientBackground";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing-page">
      <div className="semi-truck"></div>
      <GradientBackground />
      <header>
        <section>
          <div className="rt-logo"></div>
          <h1>Roadrunners Trucking</h1>
        </section>
        <h3>Serving central coast California since 1998</h3>
        <Link className="contact-link" to="/contactpage">
          Contact Us
        </Link>
      </header>
    </section>
  );
};

export default LandingPage;
