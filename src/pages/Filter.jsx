import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  // console.log(searchParams.get("age"));
  // console.log(searchParams.get("name"));
  return (
    <>
      <h2>Filter</h2>
      <button
        onClick={() => {
          setSearchParam({ name: "Bilal", age: "26" });
        }}
      >
        click
      </button>
      <input
        onChange={(e) => {
          setSearchParam({ designation: e.target.value });
        }}
      />
    </>
  );
};

export default Filter;
