import React from "react";
import { NavLink } from "react-router-dom";

const UserList = () => {
  return (
    <ul className="user-list">
      <li>
        <NavLink to="/users/bilal" className="user-link">
          Bilal
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/hussain" className="user-link">
          Hussain
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/asharib" className="user-link">
          Asharib
        </NavLink>
      </li>
    </ul>
  );
};

export default UserList;
