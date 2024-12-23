import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileBottomMenu = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("/");

  // Function to handle tab selection
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mobile-bottom-menu d-md-none">
      <Nav className="justify-content-around">
        <Nav.Item>
          <Link
            to="/"
            className={`menu-item ${activeTab === "/" ? "active" : ""}`}
            onClick={() => handleTabSelect("/")}
          >
            <i className="fa fa-home"></i>
            <span>Home</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/products"
            className={`menu-item ${activeTab === "/products" ? "active" : ""}`}
            onClick={() => handleTabSelect("/products")}
          >
            <i className="fa fa-shopping-bag"></i>
            <span>Shaping</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/offer"
            className={`menu-item ${activeTab === "/offer" ? "active" : ""}`}
            onClick={() => handleTabSelect("/offer")}
          >
            <i className="fa fa-gift"></i>
            <span>Offer</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/cart"
            className={`menu-item ${activeTab === "/card" ? "active" : ""}`}
            onClick={() => handleTabSelect("/card")}
          >
            <i className="fa fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/account"
            className={`menu-item ${activeTab === "/account" ? "active" : ""}`}
            onClick={() => handleTabSelect("/account")}
          >
            <i className="fa fa-user"></i>
            <span>Account</span>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MobileBottomMenu;
