import React from "react";
import { useLocation } from "react-router-dom";

const Other = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2>Other</h2>
    </>
  );
};

export default Other;
