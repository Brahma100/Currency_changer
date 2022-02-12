import React from "react";
import { Card, Col } from "react-bootstrap";

export default class ProductBox extends React.Component {
  render() {
    const img = this.props.product.image;
    const { title, price } = this.props.product;
    return (
      <React.Fragment>
        <Col lg={this.props.lg} md={this.props.md} xs={this.props.xs}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text style={{textAlign: "center"}}>Price: <b>{price.toFixed(2)}</b></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
