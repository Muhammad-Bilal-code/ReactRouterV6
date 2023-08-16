import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="nav-main"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      {/* <h2>Navbar</h2> */}
      <div className="logo">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          Logo
        </NavLink>
      </div>
      <ul className="navbar" style={{ margin: "0" }}>
        {/* <li>
          <NavLink
            to="/home"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/about"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/filter"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/redirect"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Redirect
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
