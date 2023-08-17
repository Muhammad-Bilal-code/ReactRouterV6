import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;

  const navigate = useNavigate();
  // let loginVal;
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
      {/* <h2>Protected</h2> */}
      <Component />
    </>
  );
};

export default Protected;
