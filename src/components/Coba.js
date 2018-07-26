import React, { Component } from "react";
import { Card, CardTitle, Col, Row } from "react-materialize";
// import Row from "../../node_modules/react-materialize/lib/Row";

export class Coba extends Component {
  render() {
    return (
      <Row>
        <Col s={1} m={1}>
          <Card
            className="small"
            header={<CardTitle image="img/sample-1.jpg">Card Title</CardTitle>}
            actions={[<a href="#">This is a Link</a>]}
          >
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </Card>
        </Col>
        <Col s={1} m={1}>
          <Card
            className="small"
            header={<CardTitle image="img/sample-1.jpg">Card Title</CardTitle>}
            actions={[<a href="#">This is a Link</a>]}
          >
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Coba;
