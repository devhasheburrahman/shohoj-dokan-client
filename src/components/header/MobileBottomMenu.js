import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileBottomMenu = () => {
  return (
    <div className="mobile-bottom-menu d-md-none">
      <Nav className="justify-content-around">
        <Nav.Item>
          <Link to="/" className="menu-item">
            <i className="bi bi-house-door-fill"></i>
            <span>Home</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products" className="menu-item">
            <i className="bi bi-building"></i>
            <span>Shaping</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products" className="menu-item">
            <i className="bi bi-building"></i>
            <span>Offer</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/card" className="menu-item">
            <i className="bi bi-camera-video-fill"></i>
            <span>Card</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/account" className="menu-item">
            <i className="bi bi-person-fill"></i>
            <span>Account</span>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MobileBottomMenu;
