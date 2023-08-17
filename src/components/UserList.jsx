import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    try {
      (async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // if(data === null){return loading...}
  console.log(data);
  return (
    <ul className="user-list">
      {data?.map((user, i) => (
        <li key={i}>
          <NavLink
            to={`/users/${user.name}`}
            className="user-link"
            state={user}
          >
            {user.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
