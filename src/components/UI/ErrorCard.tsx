import { Button, Card } from "@mui/material";
import React from "react";

import classes from "./ErrorCard.module.css";

interface ErrorCardProps {
  resetError: () => void;
  errorMessage: string;
}
const ErrorCard: React.FC<ErrorCardProps> = ({ resetError, errorMessage }) => {
  /**
   * handles click of try again
   */
  const handleTryAgain = () => {
    resetError();
  };

  return (
    <Card className={classes.card}>
      <p>Oops! {errorMessage}</p>
      <Button onClick={handleTryAgain}>Try Again</Button>
    </Card>
  );
};

export default ErrorCard;
