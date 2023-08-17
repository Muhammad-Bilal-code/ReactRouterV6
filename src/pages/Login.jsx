import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // let loginVal;
  const [loginVal, setLoginVal] = useState(localStorage.getItem("login"));
  useEffect(() => {
    // let loginVal = ;
    // setLoginVal();
    console.log(loginVal);
    if (loginVal === true) {
      console.log(loginVal);
      navigate("/");
    }
  }, [loginVal]);

  return (
    <>
      <h2>Login</h2>
      <button
        onClick={() => {
          localStorage.setItem("login", true);
          navigate("/");
        }}
      >
        login
      </button>
    </>
  );
};

export default Login;
