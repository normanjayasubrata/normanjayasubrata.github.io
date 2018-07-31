import React, { Component } from "react";
import myLogo from "../assets/images/header/norman_v_1_0.png";
// import { Navbar, NavItem } from "react-materialize";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      open: false,
      closeHover: false
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  openNav = () => {
    this.setState({
      open: true
    });
  };
  closeNav = () => {
    this.setState({
      open: false
    });
  };
  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  closeHover = () => {
    this.setState({
      closeHover: true
    });
  };

  closeNotHover = () => {
    this.setState({
      closeHover: false
    });
  };

  showYear = () => {
    return new Date().getFullYear();
  };

  render() {
    let header = {};
    const textStyle = {
      fontSize: "0.8rem"
    };
    if (this.state.width <= 600) {
      header = (
        <nav>
          <div ref={this.setWrapperRef} className="nav-wrapper container">
            <a className="nav-text-name" href="/">
              <img className="mylogo" src={myLogo} alt="Norman" />
            </a>
            <a className="button-collapse" onClick={this.openNav}>
              <i className="material-icons">menu</i>
            </a>
            <ul
              className={`side-nav ${
                this.state.open ? "visible" : "hidden"
              } left`}
              tabIndex="0"
              onBlur={this.closeNav}
            >
              <li>
                <a
                  className="nav-text"
                  onClick={this.closeNav}
                  onMouseEnter={this.closeHover}
                  onMouseLeave={this.closeNotHover}
                >
                  <i
                    className={`${
                      this.closeHover
                    } black-color  material-icons left sideNavClose`}
                    style={{ color: "blue" }}
                  >
                    close
                  </i>
                </a>
              </li>
              <li>
                <a className="nav-text" style={textStyle} href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-text"
                  style={textStyle}
                  onClick={this.closeNav}
                  href="#portofolio"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  className="nav-text"
                  style={textStyle}
                  onClick={this.closeNav}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      header = (
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
    }

    return <div className="navbar-fixed">{header}</div>;
  }
}

export default Header;
