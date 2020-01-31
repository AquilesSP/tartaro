import React from "react";
import { Container, Row, Col,Card,CardHeader } from "shards-react";

const LoginLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-4"
        lg={{ size: 12 , offset: 4 }}
        md={{ size: 12, offset: 4 }}
        sm="12"
        tag="main"
      >
        {children} 
      </Col>
    </Row>
  </Container>
);
export default LoginLayout;
