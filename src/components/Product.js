import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: Number(quantity) });
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 5000); 
  };

  return (
    <div style={{ width: '60%', margin: 'auto', marginBottom: '20px' }}>
      <Card style={{ paddingBottom: '20px' }}>
        <CardImg top style={{ width: '250px', height: 'auto', margin: '20px auto' }} src={product.image} alt={product.name} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>{product.description}</CardText>
          <CardText>${product.price}</CardText>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              style={{ width: '60px', marginRight: '10px' }}
            />
            <Button onClick={handleAddToCart} style={{ marginLeft: '10px' }}>Add to Cart</Button>
          </div>
          {addedToCart && <p style={{ marginTop: '10px', color: 'green' }}>Item added to cart!</p>}
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
