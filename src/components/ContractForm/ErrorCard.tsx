import { Button, Card } from "@mui/material";
import React from "react";

import classes from "./ErrorCard.module.css";

const ErrorCard: React.FC<{ resetError: () => void }> = ({ resetError }) => {
  const handleTryAgain = () => {
    resetError();
  };

  return (
    <Card className={classes.card}>
      <p>Oops! There was an error submitting this contract</p>
      <Button onClick={handleTryAgain}>Try Again</Button>
    </Card>
  );
};

export default ErrorCard;
