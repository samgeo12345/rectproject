import React, { useState, useEffect } from 'react';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Pro() {
    const [products, setPro] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products/1')
            .then(res => res.json())
            .then(result => {
                if (result.status === "SUCCESS" && Array.isArray(result.products)) {
                    setPro(result.products);
                    console.log(result.products);
                }
            })
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    return (
        <div className='product'>
            <Container className="mt-4">
                <Row>
                    {products.map((productItem) => (
                        <Col key={productItem.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={productItem.image} alt={productItem.title} />
                                <Card.Body>
                                    <Card.Title>{productItem.title}</Card.Title>
                                    <Card.Text><strong>₹ {productItem.price}</strong></Card.Text>
                                    <Card.Text><small className="text-muted">{productItem.brand}</small></Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Pro;