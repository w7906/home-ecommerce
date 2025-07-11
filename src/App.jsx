import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product";
import Navbar from "./Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import ProductDetails from "./ProductDetails";
import Signin from "./Signin";
import Register from "./Register";

function AppWrapper() {
  const location = useLocation();

  // Show Navbar only on /home path
  const showNavbar = location.pathname === "/home";

  return (
    <div>
      {showNavbar && <Navbar />}
      <Container style={{ marginTop: "20px" }}>
        <Routes>
  <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/Signin" element={<Signin />} />
  <Route path="/register" element={<Register />} />
  <Route path="/createaccount" element={<Signin />} />
  <Route path="/home" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/product" element={<Product />} />
  <Route path="/about" element={<About />} />
  <Route path="/product/:id" element={<ProductDetails />} />
</Routes>

      </Container>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
