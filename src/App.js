import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import routes from "./routes";

import "./css/reset.css";
import "./css/main.css";

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    return <section className="App">{routes}</section>;
  }
}

export default App;
