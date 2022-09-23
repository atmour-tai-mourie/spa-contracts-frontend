import * as React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1>PF Contracts</h1>
      <Link to="/" className={classes.link}>
        Add New Contract
      </Link>
      <Link to="/contracts" className={classes.link}>
        Contracts
      </Link>
    </header>
  );
};

export default Header;
