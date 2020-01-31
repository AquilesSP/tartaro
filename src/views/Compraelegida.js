import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class Compraelegida extends React.Component {
  render() {
    return (
        <PageTitle
          sm="4"
          title="Compra elegida"
          subtitle="Compra #131231 24/03/2019 14 - 18 hs Veterinaria Sebastian"
          className="text-sm-left"
        />
    );
  }
}

export default Compraelegida;
