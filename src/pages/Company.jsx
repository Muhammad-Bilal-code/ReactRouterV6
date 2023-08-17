import React from "react";
import { useLocation } from "react-router-dom";

const Company = () => {
  const location = useLocation();
  // console.log(location);
  console.log(location.state);

  // const { test, abc, ...rest } = location.state;
  const { test, abc, ...rest } = { ...location.state, before: "before" };
  console.log({ rest });
  return (
    <>
      <h2>Company</h2>
      <p>{abc}</p>
      <p>{test}</p>
    </>
  );
};

export default Company;
