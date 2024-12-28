import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css'; 
import logo from '../assets/clogo.jpg'; 

const Navbar = ({ cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="highlighted-c">C</span>ourseCove
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : 'collapse'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses" onClick={() => setMobileMenuOpen(false)}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={() => setMobileMenuOpen(false)}>
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout" onClick={() => setMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItemCount > 0 && <span className="badge bg-danger">{cartItemCount}</span>}
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control me-2"
              />
              <button onClick={handleSearch} className="btn btn-success">
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
