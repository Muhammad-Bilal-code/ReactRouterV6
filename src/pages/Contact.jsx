import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <h3>Here We have other routes</h3>
      <Link to="company">Company</Link>
      <Link to="other">Other</Link>
      <Outlet />
    </>
  );
};

export default Contact;
