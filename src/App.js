import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'; 
import Account from './pages/Account'; 
import { Navbar, Nav, NavItem, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

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
      <Container>
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
