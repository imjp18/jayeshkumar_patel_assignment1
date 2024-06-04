import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Account from './pages/Account';
import { Navbar, Nav, NavItem, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(p => p.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        return [...prevCart, product];
      }
    });
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const [user, setUser] = useState({});

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <Container>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cart">Shopping Cart</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/account">Account</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid style={{ minHeight: '100vh', padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} updateCart={updateCart} />} />
          <Route path="/account" element={<Account user={user} updateUser={updateUser} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
