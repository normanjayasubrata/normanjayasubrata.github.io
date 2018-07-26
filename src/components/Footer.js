import React, { Component } from "react";
import { Footer, Row, Col, Container } from "react-materialize";

import linkedinLogo from "../assets/images/footer/linkedin.jpg";
import githubLogo from "../assets/images/footer/github.png";
import facebookLogo from "../assets/images/footer/facebook.png";

class MyFooter extends Component {
  showYear = () => {
    return new Date().getFullYear();
  };

  render() {
    const otherFooter = (
      <Footer
        // copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <span className="black-text">
            © {this.showYear()}
            <span className="right">
              This web built with <a href="#!">ReactJS</a> and{" "}
              <a href="#!">React-Materialize</a>
            </span>
          </span>
        }
        links={
          <Row>
            <Col s={3}>
              <a className="black-text" href="#!">
                <img id="github-logo" src={githubLogo} alt="Github" />
                <p>Github</p>
              </a>
            </Col>
            <Col s={3}>
              <a className="black-text" href="#!">
                <img id="github-logo" src={linkedinLogo} alt="linkedIn" />
                <p>LinkedIn</p>
              </a>
            </Col>
            <Col s={3}>
              <a className="black-text" href="#!">
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

    return <div>{otherFooter}</div>;
  }
}

export default MyFooter;
