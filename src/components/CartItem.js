import React from 'react';
import { ListGroupItem, Button, Input } from 'reactstrap';

const CartItem = ({ item, removeItem, changeQuantity }) => {
  return (
    <ListGroupItem>
      <div>
        <strong>{item.name}</strong> - ${item.price} x
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => changeQuantity(item.id, e.target.value)}
          min="1"
          style={{ width: '60px', display: 'inline', marginLeft: '10px' }}
        />
      </div>
      <Button color="danger" onClick={() => removeItem(item.id)}>
        Remove
      </Button>
    </ListGroupItem>
  );
};

export default CartItem;
