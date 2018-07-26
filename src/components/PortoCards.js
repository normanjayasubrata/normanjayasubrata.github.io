import React, { Component } from "react";
import {
  Card,
  CardTitle,
  Col,
  Modal,
  Button,
  Icon,
  Row,
  Slider,
  Slide
} from "react-materialize";

class PortoCards extends Component {
  render() {
    const { name, desc, alt, projectLink, image, id, images } = this.props;
    const myStyle = {
      fontSize: "7pt"
    };

    const otherimages = images.map((image, index) => {
      return <Slide key={index} src={image} />;
    });

    return (
      <Col s={8} m={4} key={id}>
        <Card
          header={<CardTitle image={image} alt={alt} />}
          title={name}
          actions={[
            <Row>
              <Col s={6}>
                <Modal
                  className="col s6"
                  header={name}
                  trigger={
                    <Button waves="light" style={myStyle}>
                      What's This?<Icon right>insert_chart</Icon>
                    </Button>
                  }
                >
                  <Slider className="slideimage">{otherimages}</Slider>
                  <p>{desc}</p>
                </Modal>
              </Col>
              <Col s={6}>
                <a href={projectLink} target="_blank">
                  <Button waves="light" style={myStyle}>
                    Check It Out<Icon right>insert_chart</Icon>
                  </Button>
                </a>
              </Col>
            </Row>
          ]}
        />
      </Col>
    );
  }
}

export default PortoCards;
