import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  const [name, updateName] = useState();
  const [email, updateEmail] = useState();
  const [message, updateMessage] = useState();
  const [error, updateError] = useState(false);
  const [errorMessage, updateErrorMessage] = useState("");

  // const sendEmail = async () => {
  //   if (!nameInput || !emailInput || !messageInput) {
  //     updateError(!error);
  //     updateErrorMessage(
  //       "Please fill out your contact information and a message."
  //     );
  //     return;
  //   }

  //   if (
  //     nameInput.length > 50 ||
  //     emailInput.length > 50 ||
  //     messageInput.length > 250
  //   ) {
  //     updateError(!error);
  //     updateErrorMessage(
  //       "You have exceeded the character limit. Message must be under 250 characters."
  //     );
  //     return;
  //   }

  //   await axios
  //     .post(
  //       `https://hkcll37ttk.execute-api.us-west-2.amazonaws.com/default/hinge-website-email?name=${nameInput}&email=${emailInput}&message=${messageInput}`
  //     )
  //     .then((res) => console.log("message sent", res))
  //     .catch((err) => console.log("message not sent", err));
  // };

  return (
    <section id="contact-page" className="contact-page">
      <section className="contact-page-container">
        <section>
          <h1>Contact us</h1>
          <p>
            We would love to hear from you. Let us know your needs and we will
            accommodate.
          </p>
        </section>
        {error ? <section></section> : <section></section>}
        <section>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Message"></textarea>
            <section>
              <input type="submit" value="Ship" className="submit-button" />
              <div>
                <FontAwesomeIcon icon={faTruck} className="fa-truck" />
              </div>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
};

export default ContactPage;
