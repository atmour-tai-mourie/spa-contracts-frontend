import React from "react";

import classes from "./Spinner.module.css";

const Spinner: React.FC = () => {
  return (
    <div className={classes.spinner__container}>
      <div className={classes.loading__spinner}></div>
    </div>
  );
};

export default Spinner;
