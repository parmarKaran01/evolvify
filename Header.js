import { Link } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link to="/" className="title">
        Improve your Knowledge
      </Link>
      <br className="divider" />
    </div>
  );
};

export default Header;
