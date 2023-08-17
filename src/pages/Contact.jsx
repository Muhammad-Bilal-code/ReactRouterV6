import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const navigateTo = (url, data) => {
    navigate(url, data);
    // console.log(state);
  };
  return (
    <>
      <h2>Contact</h2>
      <h3>Here We have other routes</h3>
      <button
        onClick={() =>
          navigateTo("company", {
            state: { abc: "abc", test: "test", now: "now", later: "later" },
          })
        }
      >
        Company
      </button>
      <Link to="other" state={{ abc: "test" }}>
        Other
      </Link>
      <Outlet />
    </>
  );
};

export default Contact;
