import React from "react";
import { useParams, useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const { name, username, id } = location.state;
  // const { name } = useParams();
  // console.log(name);
  return (
    <>
      <h2>User Detail </h2>
      {name}
      {username}
      {id}
    </>
  );
};

export default UserDetail;
