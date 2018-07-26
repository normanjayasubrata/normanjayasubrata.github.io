import React, { Component } from "react";
import myLogo from "../assets/images/header/norman_v_1_0.png";

class Header extends Component {
  render() {
    let header = (
      <nav>
        <div className="nav-wrapper container">
          <a className="nav-text-name" href="/">
            <img className="mylogo" src={myLogo} alt="Norman" />
          </a>
          <ul className="right hide-on-sm-and-down">
            <li>
              <a className="nav-text" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-text" href="#portofolio">
                Portofolio
              </a>
            </li>
            <li>
              <a className="nav-text" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );

    return <div className="navbar-fixed">{header}</div>;
  }
}

export default Header;
