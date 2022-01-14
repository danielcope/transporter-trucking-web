import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <section id="contact-page" className="contact-page">
      <section className="contact-page-container">
        <section>
          <section className="contact-page-title-container">
            <h1>
              Contact us
              <FontAwesomeIcon className="faTruck-icon" icon={faTruck} />
            </h1>
          </section>
          <p>
            We would love to hear from you. React out to us through one of these
            methods and we will accommodate.
          </p>
        </section>
        <section className="contact-info">
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              805-621-0158
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              roadrunnerstrucking@gmail.com
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              Roadrunners Trucking
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default ContactPage;
