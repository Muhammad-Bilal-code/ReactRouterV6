import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/users")}>Users</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/filter")}>Filter</button>
        </li>
      </ul>
    </>
  );
};

export default LandingPage;
