import "../App.css";
import Card from "@material-ui/core/Card";
import Container from "react-bootstrap/Container";
import React from "react";

const About = () => {
  return (
    <Container>
      <div>About Page</div>
      <div>
        <Card className="thoughtsCard">First Card in About page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Second Card in About page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Third Card in About page.</Card>
      </div>
    </Container>
  );
};

export default About;
