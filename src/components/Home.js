import React, { Component } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

const mySkill = ["Coding", "Design", "Fun"];

class Home extends Component {
  render() {
    const home = (
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

    return (
      <section className="home">
        <div>{home}</div>
      </section>
    );
  }
}

export default Home;
