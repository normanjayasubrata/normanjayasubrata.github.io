import React, { Component } from "react";
import Particles from "react-particles-js";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
// import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#212529"
    },
    shape: {
      type: ["polygon", "triangle", "star"]
    },
    size: {
      value: 5
    },
    line_linked: {
      color: "#212529"
    }
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particles" params={particleOptions} />

        <Header />

        <Home />
        <About />
        <Portofolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
