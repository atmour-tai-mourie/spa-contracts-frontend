import * as React from "react";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1>PF Contracts</h1>
    </header>
  );
};

export default Header;
