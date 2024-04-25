import React from "react";
import { Link } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <h1> Root </h1>
      <Link to="about">About Us</Link>
    </div>
  );
};

export default Root;
