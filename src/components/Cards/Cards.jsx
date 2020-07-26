import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import Instagram from "../../assets/Instagram.png";
import LeanberCircle from "../../assets/Leanber-circle.png";
import LeanberIg from "../../assets/Leanber-ig.png";

function Cards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={Instagram} />
        <Card.Body>
          <Card.Img style={{ width: "8rem" }} variant='top' src={LeanberCircle} />
          <Card.Img variant='top' src={LeanberIg} />
          <Card.Text>leanber_oficial</Card.Text>
          <Button variant='primary'>Continuar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
