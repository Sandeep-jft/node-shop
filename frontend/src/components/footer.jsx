import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center" >
            <span >Copyright &copy; Shopping 2022 </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
