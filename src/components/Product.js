import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <Card>
      <CardImg top width="100%" src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>${product.price}</CardText>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
