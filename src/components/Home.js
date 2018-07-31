import React, { Component } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

const mySkill = ["Coding", "Design", "Fun"];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSize);
  }

  componentWillUnmount = () => {
    window.addEventListener("resize", this.handleWindowSize);
  };

  handleWindowSize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    let home = {};

    if (this.state.width <= 600) {
      home = (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3 className="norman">Hi There, I'm Norman</h3>
            </div>
            <div className="col s6">
              <h3 className="typingtext">I can do</h3>
            </div>
            <div className="col s6">
              <h3 className="typingtext">
                <TypistLoop interval={500}>
                  {mySkill.map(skill => (
                    <Typist key={skill} startDelay={500}>
                      {skill}
                      <Typist.Backspace count={8} delay={1000} />
                    </Typist>
                  ))}
                </TypistLoop>
              </h3>
            </div>
          </div>
        </div>
      );
    } else {
      home = (
        <div className="container">
          <div className="row kanan">
            <div className="col s12">
              <h3 className="norman">Hi There, I'm Norman</h3>
            </div>
            <div className="col s6">
              <h3 className="typingtext" style={{ textAlign: "right" }}>
                I can do
              </h3>
            </div>
            <div className="col s6">
              <h3 className="typingtext" style={{ textAlign: "left" }}>
                <TypistLoop interval={500}>
                  {mySkill.map(skill => (
                    <Typist key={skill} startDelay={500}>
                      {skill}
                      <Typist.Backspace count={8} delay={1000} />
                    </Typist>
                  ))}
                </TypistLoop>
              </h3>
            </div>
          </div>
        </div>
      );
    }

    return (
      <section className="home">
        <div>{home}</div>
      </section>
    );
  }
}

export default Home;
