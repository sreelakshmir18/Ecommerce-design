import React from 'react'
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';

function Header() {
  return (

    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span><img src="/images/phone.svg" alt="Phone Icon" /> + 62198745</span>
          <span><img src="/images/envelope.svg" alt="Email Icon" /> support@golectric.com</span>
        </div>

        <div className="top-links">
          <span><img src="/images/Vector.svg" alt="Store Locations" /> Store Locations</span>
          <span><img src="/images/track.svg" alt="Track Order" /> Track Your Order</span>
          <span>
            <select className="currency-dropdown">
              <option value="USD">Dollar (US)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">Pound (GBP)</option>
            </select>
          </span>
          <span>
            <select className="language-dropdown">
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </span>
        </div>
      </div>
      {/* Main Header with Navbar */}
      <Navbar expand="lg" className="main-header bg-body-tertiary">
        <Container fluid>
          {/* Logo */}


          {/* Account and Cart Icons */}
          <div className="header-icons d-flex align-items-center">



            <div className="d-flex align-items-center">
              <Navbar.Brand href="" className="logo">
                <img src="/images/logo.svg" alt="Golectric Logo" />
                <span>Golectric</span>
              </Navbar.Brand>
            </div>


            <div className="d-flex search-bar ms-auto">
              <input
                type="search"
                placeholder="Search here..."
                className="form-control me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">
                <img src="/images/Search.svg" alt="Search Icon" />
              </Button>
            </div>


            <div className="cart-icon me-3">
              <img src="/images/Chart.svg" alt="Cart Icon" />
            </div>

            <Button variant="primary" className="account-button" >

              <img src="/images/Account.svg" alt="Account Icon" /> MY ACCOUNT

            </Button>
          </div>

        </Container>
      </Navbar>

      {/* Navigation Menu */}
      <nav className="navigation-menu">
        <span>All Categories</span>
        <span>Accessories</span>
        <span>Smartphone</span>
        <span>Computer</span>
        <span>Gaming Equipments</span>
        <span>TV & Monitors</span>
        <span><img src="/images/Sale.svg" alt="Sale Icon" /> Flash Sale</span>
      </nav>
    </header>


  )
}

export default Header