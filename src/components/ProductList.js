import React from 'react';
import Product from './Product';
import { Row } from 'reactstrap';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10, image: 'image1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20, image: 'image2.jpg' },
 
];

const ProductList = ({ addToCart }) => {
  return (
    <Row>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </Row>
  );
};

export default ProductList;
