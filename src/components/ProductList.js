import React from 'react';
import Product from './Product';
import { Row } from 'reactstrap';


const products = [
  { 
    id: 1, 
    name: 'Classic T-Shirt', 
    description: 'A comfortable and stylish classic T-shirt made from high-quality cotton.', 
    price: 15.99, 
    image: '/asset/images/T-Shirt.jpeg' 
  },
  { 
    id: 2, 
    name: 'Slim Fit Jeans', 
    description: 'A pair of slim fit jeans crafted from stretch denim for a comfortable and stylish fit.', 
    price: 39.99, 
    image: '/asset/images/Jeans.jpeg' 
  },
  { 
    id: 3, 
    name: 'Running Shoes', 
    description: 'Lightweight and breathable running shoes designed for maximum comfort and performance.', 
    price: 49.99, 
    image: '/asset/images/RunningShoes.jpeg' 
  },
  { 
    id: 4, 
    name: 'Leather Wallet', 
    description: 'A classic leather wallet with multiple card slots and compartments for organizing your essentials.', 
    price: 29.99, 
    image: '/asset/images/LeatherWallet.jpeg' 
  },
  { 
    id: 5, 
    name: 'Wireless Headphones', 
    description: 'High-quality wireless headphones with noise-cancelling technology for an immersive audio experience.', 
    price: 79.99, 
    image: '/asset/images/WirelessHeadphone.jpeg' 
  },
  { 
    id: 6, 
    name: 'Portable Charger', 
    description: 'A compact and lightweight portable charger with fast-charging capabilities to keep your devices powered on the go.', 
    price: 24.99, 
    image: '/asset/images/PortableCharger.jpeg' 
  },
  { 
    id: 7, 
    name: 'Stainless Steel Water Bottle', 
    description: 'A sleek and durable stainless steel water bottle to keep you hydrated throughout the day.', 
    price: 19.99, 
    image: '/asset/images/Bottle.jpeg' 
  }
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
