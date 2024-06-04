import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 5000); 
  };

  return (
    <div style={{ width: '70%', margin: 'auto', marginBottom: '20px' }}>
      <Card>
        <CardImg top style={{ width: '250px', height: 'auto', margin: '0 auto' }} src={product.image} alt={product.name} />
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
          <Button onClick={handleAddToCart} style={{ marginTop: '10px' }}>Add to Cart</Button>
          {addedToCart && <p style={{ marginTop: '10px', color: 'green' }}>Item added to cart!</p>}
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
