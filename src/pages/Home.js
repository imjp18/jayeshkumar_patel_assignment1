import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  return (
    <div>
      <h2>Home</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
