import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <h2>Navbar</h2> */}
      <ul className="navbar">
        <li>
          <NavLink
            to="/home"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="navabar-link"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "green" : "transparent" };
            }}
          >
            Contact
          </NavLink>
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
      </ul>
    </>
  );
};

export default Navbar;
