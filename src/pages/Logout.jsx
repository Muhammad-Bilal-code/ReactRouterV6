import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  //   const loginTrue = () => {
  //     localStorage.setItem("login", true);
  //   };
  const navigate = useNavigate();
  const [loginVal, setLoginVal] = useState(localStorage.getItem("login"));
  useEffect(() => {
    // let loginVal = localStorage.getItem("login");
    console.log(loginVal);
    if (loginVal === false || loginVal === null) {
      console.log(loginVal);
      navigate("/login");
    }
  }, [loginVal]);
  return (
    <>
      <h2>Logout</h2>
      <button
        onClick={() => {
          localStorage.setItem("login", false);
          navigate("/login");
        }}
      >
        logout
      </button>
    </>
  );
};

export default Logout;
