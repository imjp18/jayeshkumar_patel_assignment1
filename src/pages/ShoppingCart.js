import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input, Container } from 'reactstrap';

const ShoppingCart = ({ cart, updateCart, removeFromCart, updateProductQuantity }) => {
  const handleQuantityChange = (productId, quantity) => {
    const newQuantity = Math.max(1, parseInt(quantity, 10)); 
    updateProductQuantity(productId, newQuantity);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 56px)' }}>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(product => (
            <Card key={product.id} style={{ marginBottom: '20px' }}>
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
                <CardText>Price: ${product.price}</CardText>
                <CardText>
                  Quantity:
                  <Input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    min="1"
                    style={{ width: '60px', display: 'inline-block', marginLeft: '10px' }}
                  />
                </CardText>
                <Button onClick={() => handleRemove(product.id)}>Remove</Button>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default ShoppingCart;
