import "../App.css";

import Card from "@material-ui/core/Card";
import Container from "react-bootstrap/Container";
import React from "react";

const Thoughts = () => {
  return (
    <Container>
      <div>Thoughts Page</div>
      <div>
        <Card className="thoughtsCard">Second Card in thoughts page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Third Card in thoughts page.</Card>
      </div>
      <div>
        <Card className="thoughtsCard">Fourth Card in thoughts page.</Card>
      </div>
    </Container>
  );
};

export default Thoughts;
