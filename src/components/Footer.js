import React, { Component } from "react";
import { Footer, Row, Col, Container } from "react-materialize";

import linkedinLogo from "../assets/images/footer/linkedin.jpg";
import githubLogo from "../assets/images/footer/github.png";
import facebookLogo from "../assets/images/footer/facebook.png";

class MyFooter extends Component {
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

  showYear = () => {
    return new Date().getFullYear();
  };

  render() {
    let myFooter = {};

    if (this.state.width <= 600) {
      myFooter = (
        <Footer
          // copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <span className="black-text center">
              <p className="center">© {this.showYear()}</p>

              <span className="right">
                This web built with <a href="#!">ReactJS</a> and{" "}
                <a href="#!">React-Materialize</a>
              </span>
            </span>
          }
          links={
            <Row>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://github.com/normanjayasubrata"
                >
                  <img id="github-logo" src={githubLogo} alt="Github" />
                  <p>Github</p>
                </a>
              </Col>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://id.linkedin.com/in/norman-jaya-subrata"
                >
                  <img id="github-logo" src={linkedinLogo} alt="linkedIn" />
                  <p>LinkedIn</p>
                </a>
              </Col>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://id-id.facebook.com/norman.subrata"
                >
                  <img id="github-logo" src={facebookLogo} alt="Facebook" />
                  <p>Facebook</p>
                </a>
              </Col>
            </Row>
          }
          className="white"
        >
          <Container>
            <h5 className="black-text">GET CONNECT!!</h5>
            <p className="black-text center">Norman Jaya Subrata</p>
          </Container>
        </Footer>
      );
    } else {
      myFooter = (
        <Footer
          // copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <span className="black-text center">
              <span className="left">© {this.showYear()}</span>

              <span className="right">
                This web built with <a href="#!">ReactJS</a> and{" "}
                <a href="#!">React-Materialize</a>
              </span>
            </span>
          }
          links={
            <Row>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://github.com/normanjayasubrata"
                >
                  <img id="github-logo" src={githubLogo} alt="Github" />
                  <p>Github</p>
                </a>
              </Col>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://id.linkedin.com/in/norman-jaya-subrata"
                >
                  <img id="github-logo" src={linkedinLogo} alt="linkedIn" />
                  <p>LinkedIn</p>
                </a>
              </Col>
              <Col s={3}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-text"
                  href="https://id-id.facebook.com/norman.subrata"
                >
                  <img id="github-logo" src={facebookLogo} alt="Facebook" />
                  <p>Facebook</p>
                </a>
              </Col>
            </Row>
          }
          className="white"
        >
          <Container>
            <h5 className="black-text">GET CONNECT!!</h5>
            <p className="black-text center">Norman Jaya Subrata</p>
          </Container>
        </Footer>
      );
    }

    return <div>{myFooter}</div>;
  }
}

export default MyFooter;
