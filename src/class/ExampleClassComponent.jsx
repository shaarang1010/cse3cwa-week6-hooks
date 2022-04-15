import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: null,
      name: null,
      products: [],
      product: null,
    };
  }

  // lets get list of products from fakestore api -https://fakestoreapi.com/
  getProducts = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    return products;
  };

  /**
   * @param {number} id - The date
   */
  getProductById = async (id) => {
    const productDetails = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );
    return productDetails;
  };

  onProductSelectHandler = (id) => {
    this.getProductById(id)
      .then((res) => res.json())
      .then((json) => this.setState({ product: json }));
  };

  componentDidMount() {
    this.getProducts()
      .then((res) => res.json())
      .then((json) => this.setState({ counter: 0, name: "", products: json }));
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.product !== prevState.product) {
  //       console.log("Do something on product change");
  //     }
  //   }

  render() {
    return (
      <Container>
        {!this.state.product ? (
          <Row>
            {this.state.products &&
              this.state.products.map((product, index) => {
                return (
                  <Col key={index} sm={4} className="pb-3">
                    <Card key={product.id} style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{
                          height: "200px",
                          width: "200px",
                          padding: "10px",
                        }}
                        onClick={() => this.onProductSelectHandler(product.id)}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Rating: {product.rating.rate}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        ) : (
          <>
            <Card>
              <Card.Header>{this.state.product.title}</Card.Header>
              <Card.Img
                src={this.state.product.image}
                style={{ height: "200px", width: "200px", padding: "10px" }}
              ></Card.Img>
              <Card.Body>
                <Card.Text>{this.state.product.description}</Card.Text>
              </Card.Body>
            </Card>
          </>
        )}
      </Container>
    );
  }
}

export default ExampleComponent;
