import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
