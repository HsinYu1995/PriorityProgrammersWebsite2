import "../App.css";
import Card from "@material-ui/core/Card";
import Container from "react-bootstrap/Container";
import React from "react";

const Contact = () => {
  return (
    <Container>
      <div>Contact Page</div>
      <div>
        <Card className="thoughtsCard">First Card in Contact page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Second Card in Contact page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Third Card in Contact page.</Card>
      </div>
    </Container>
  );
};

export default Contact;
