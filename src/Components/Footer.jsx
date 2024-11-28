import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="newsletter">
          <h2>Sign Up for Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Logo and Description */}
          <div className="footer-section footer-logo">
            <img src="/images/footerlogo.svg" alt="Golectric Logo" />
            <p>Golectric</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="social-icons">

              <span><img src="/images/instagram.svg" alt="" /></span>
              <span><img src="/images/twitter.svg" alt="" /></span>
              <span><img src="/images/facebook.svg" alt="" /></span>
            </div>
          </div>


          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>Help Center</li>
              <li>Payment Methods</li>
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p><img src="/images/Call.svg" alt="" /> +62 83175 02</p>
            <p><img src="/images/email.svg" alt="" /> support@golectric.com</p>
            <div className="app-links">
              <button><img src="/images/appStore.svg" alt="" /></button>
              <button><img src="/images/Google Play.svg" alt="" /></button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>Copyright © 2022 Golectric. All Rights Reserved</p>
          <div className="payment-methods">
            <span><img src="/images/master card.svg" alt="" /></span>
            <span><img src="/images/visa.svg" alt="" /></span>
            <span><img src="/images/rupay.svg" alt="" /></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer