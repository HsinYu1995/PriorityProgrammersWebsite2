import "../App.css";
import Card from "@material-ui/core/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const photoNumbers = 12;
var cards = [];
var i = 0;
while (i < photoNumbers) {
  if (photoNumbers - 4 >= i) {
    cards.push(
      <Row key={i} style={{ marginBottom: "20px" }}>
        <Col>
          <Card key={i} className="cardStyle">
            card{i}
          </Card>
        </Col>
        <Col>
          <Card key={i + 1} className="cardStyle">
            card{i + 1}
          </Card>
        </Col>
        <Col>
          <Card key={i + 2} className="cardStyle">
            card{i + 2}
          </Card>
        </Col>
        <Col>
          <Card key={i + 3} className="cardStyle">
            card{i + 3}
          </Card>
        </Col>
      </Row>
    );
    i = i + 4;
  } else if (photoNumbers - 3 >= i) {
    cards.push(
      <Row key={i} style={{ marginBottom: "20px" }}>
        <Col>
          <Card key={i} className="cardStyle">
            card{i}
          </Card>
        </Col>
        <Col>
          <Card key={i + 1} className="cardStyle">
            card{i + 1}
          </Card>
        </Col>
        <Col>
          <Card key={i + 2} className="cardStyle">
            card{i + 2}
          </Card>
        </Col>
      </Row>
    );
    i = i + 3;
  } else if (photoNumbers - 2 >= i) {
    cards.push(
      <Row key={i} style={{ marginBottom: "20px" }}>
        <Col>
          <Card key={i} className="cardStyle">
            card{i}
          </Card>
        </Col>
        <Col>
          <Card key={i + 1} className="cardStyle">
            card{i + 1}
          </Card>
        </Col>
      </Row>
    );
    i = i + 2;
  } else if (photoNumbers - 1 >= i) {
    cards.push(
      <Row key={i} style={{ marginBottom: "20px" }}>
        <Col>
          <Card key={i + 1} className="cardStyle">
            card{i + 1}
          </Card>
          <Card key={i}>card{i}</Card>
        </Col>
      </Row>
    );
    i = i + 1;
  }
}

const Portfolio = () => {
  return (
    <Container>
      <div>Portfolio Page</div>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ height: "150px", marginBottom: "20px" }}>
        <FrontSide className="thoughtsCard">
          Title Card in Portfolio front side.
        </FrontSide>
        <BackSide className="thoughtsCard">
          Title Card in Portfolio back side.
        </BackSide>
      </Flippy>
      {cards}
    </Container>
  );
};

export default Portfolio;
