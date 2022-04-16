import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

// lets get list of products from fakestore api -https://fakestoreapi.com/
const getProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  return products;
};

/**
 * @param {number} id - The id of the product
 */
const getProductById = async (id) => {
  const productDetails = await fetch(`https://fakestoreapi.com/products/${id}`);
  return productDetails;
};

const ExampleStoreUsingHooks = (props) => {
  const [counter, setCounter] = useState(null);
  const [name, setName] = useState(null);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const onProductSelectHandler = (id) => {
    getProductById(id)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getProducts()
      .then((res) => res.json())
      .then((json) => {
        setCounter(0);
        setName("");
        setProducts(json);
      });
  }, []);

  return (
    <Container>
      {!product ? (
        <Row>
          {products &&
            products.map((prod, index) => {
              return (
                <Col key={index} sm={4} className="pb-3">
                  <Card key={prod.id} style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={prod.image}
                      style={{
                        height: "200px",
                        width: "200px",
                        padding: "10px",
                      }}
                      onClick={() => onProductSelectHandler(prod.id)}
                    />
                    <Card.Body>
                      <Card.Title>{prod.title}</Card.Title>
                      <Card.Text>Rating: {prod.rating.rate}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      ) : (
        <>
          <Card>
            <Card.Header>{product.title}</Card.Header>
            <Card.Img
              src={product.image}
              style={{ height: "200px", width: "200px", padding: "10px" }}
            ></Card.Img>
            <Card.Body>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default ExampleStoreUsingHooks;
