import React from "react";
import { FaTshirt, FaLaptop, FaMobileAlt, FaCouch, FaBlender } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column vh-100 bg-light border-end position-relative"
      style={{ width: "250px" }}
    >
    

      {/* Sidebar Header with Logo */}
      <div className="p-4 border-bottom text-center">
        <img
          src="data:image/png;base64,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" // Replace with your logo URL
          alt="HyBrix Logo"
          className="mb-2"
          style={{ width: "200px", height: "100px", objectFit: "fill", borderRadius: "8px" }}
        />
       
      </div>

      {/* Product Categories */}
      <div className="flex-grow-1 px-3">
        <div className="mb-4">
          <h5 className="text-uppercase ">Product Categories</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/clothing" className="nav-link text-dark d-flex align-items-center">
                <FaTshirt className="me-2" />
                Clothing
              </a>
            </li>
            <li className="nav-item">
              <a href="/electronics" className="nav-link text-dark d-flex align-items-center">
                <FaLaptop className="me-2" />
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a href="/mobiles" className="nav-link text-dark d-flex align-items-center">
                <FaMobileAlt className="me-2" />
                Mobiles
              </a>
            </li>
            <li className="nav-item">
              <a href="/furniture" className="nav-link text-dark d-flex align-items-center">
                <FaCouch className="me-2" />
                Furniture
              </a>
            </li>
            <li className="nav-item">
              <a href="/appliances" className="nav-link text-dark d-flex align-items-center">
                <FaBlender className="me-2" />
                Appliances
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
