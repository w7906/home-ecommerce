import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Dummy count for now

  const hideNavbarOnPaths = ["/Signin", "/register", "/login", "/CreateAccount"];
  if (hideNavbarOnPaths.includes(location.pathname)) return null;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const dark = !isDarkMode;
    setIsDarkMode(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    document.body.classList.toggle("bg-dark", dark);
    document.body.classList.toggle("text-white", dark);
    document.body.classList.toggle("bg-light", !dark);
    document.body.classList.toggle("text-dark", !dark);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    setIsDarkMode(dark);
    document.body.classList.add(dark ? "bg-dark" : "bg-light");
    document.body.classList.add(dark ? "text-white" : "text-dark");
  }, []);

  return (
    <div
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s ease-in-out",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Top Authentication Links - Only on Home Page */}
      {location.pathname === "/home" && (
        <div className="bg-dark text-white py-1 px-4 d-flex justify-content-end">
          <Link to="/Signin" className="text-white me-3 text-decoration-none">Sign In / Guest</Link>
          <Link to="/CreateAccount" className="text-white text-decoration-none">Create Account</Link>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link
            to="/home"
            className="navbar-brand bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50, borderRadius: "50%", fontSize: 22 }}
          >
            C
          </Link>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">Products</Link>
              </li>
            </ul>
          </div>

          {/* Icons (Theme toggle + Cart) */}
          <div className="d-flex align-items-center gap-3 me-4">
            <button className="btn btn-outline-secondary" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            <Link to="/cart" className="position-relative">
              <button className="btn btn-outline-secondary">
                <BsCart3 size={20} />
              </button>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;