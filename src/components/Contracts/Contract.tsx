import React from "react";
import { Card } from "@mui/material";

import classes from "./Contract.module.css";

interface ContractData {
  contractAmount: number;
  interestRate: number;
  borrower: string;
  investor: string;
}

const Contract: React.FC<{ contractData: ContractData }> = ({
  contractData,
}) => {
  const { contractAmount, interestRate, investor, borrower } = contractData;
  return (
    <Card className={classes.card}>
      <div className={classes.details__container}>
        <p>${contractAmount}</p>
        <p>{interestRate} % p.a.</p>
      </div>
      <div>
        <p>Investor: {investor}</p>
        <p>Borrower: {borrower}</p>
      </div>
    </Card>
  );
};

export default Contract;
