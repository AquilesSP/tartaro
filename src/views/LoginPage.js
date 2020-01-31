import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Login from "../components/components-overview/Login";


const LoginPage = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Mispichos.com"
          subtitle="Sistema de administración"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="3" className="mb-4">
          <Card small>  
              <CardHeader className="border-bottom">
                <h6 className="m-0">Login</h6>
              </CardHeader>
              <Login />
          </Card>
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default LoginPage;
