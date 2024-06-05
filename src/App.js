import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ErrorPage from './components/Error';
import Account from './pages/Account';
import { Navbar, Nav, NavItem, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
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

  const updateProductQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => 
        item.id === productId ? { ...item, quantity: quantity } : item
      );
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
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
      <Container>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} updateProductQuantity={updateProductQuantity} />} />
          <Route path="/account" element={<Account user={user} updateUser={updateUser} />} />
          <Route path="/" element={<Footer/>}/>
          <Route path="*" element={<ErrorPage/>}/>

        </Routes>
      </Container>
    </Router>
  );
};

export default App;
