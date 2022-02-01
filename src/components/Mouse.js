import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const Mouse = () => {
  return (
    <section className="learn-more">
      <h5>
        <span>Learn More</span>
        <FontAwesomeIcon className="mouse" icon={faMouse} /> &#8595;
      </h5>
    </section>
  );
};

export default Mouse;
