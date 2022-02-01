import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../AboutSection";
import GradientBackground from "../GradientBackground";
import Mouse from "../Mouse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing-page">
      <section id="top-landing" className="top-landing">
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
        </header>
      </section>
      <Mouse />
      <AboutSection />
    </section>
  );
};

export default LandingPage;
