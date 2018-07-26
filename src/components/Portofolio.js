import React, { Component } from "react";
import { Row } from "react-materialize";

import PortoCards from "./PortoCards";
import portofolios from "../assets/data/portofolio_data";
// import Coba from "./Coba";

class Portofolio extends Component {
  render() {
    const portofilioList = portofolios.map(portofolio => {
      return (
        <PortoCards
          name={portofolio.name}
          id={portofolio.id}
          desc={portofolio.desc}
          alt={portofolio.alt}
          projectLink={portofolio.projectLink}
          image={portofolio.image}
          key={portofolio.id}
          images={portofolio.images}
        />
      );
    });

    return (
      <div className="portofolio" id="portofolio">
        <Row>{portofilioList}</Row>
      </div>
    );
  }
}

export default Portofolio;
