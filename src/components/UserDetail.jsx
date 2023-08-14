import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <h2>User Detail </h2>
      <p>{name}</p>
    </>
  );
};

export default UserDetail;
