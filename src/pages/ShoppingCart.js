import React from 'react';
import CartItem from '../components/CartItem'; 


import { ListGroup, Button } from 'reactstrap';

const ShoppingCart = ({ cart, updateCart }) => {
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const changeQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            changeQuantity={changeQuantity}
          />
        ))}
      </ListGroup>
      <Button color="success" onClick={() => alert('Purchase Complete!')}>
        Finalize Purchase
      </Button>
    </div>
  );
};

export default ShoppingCart;
