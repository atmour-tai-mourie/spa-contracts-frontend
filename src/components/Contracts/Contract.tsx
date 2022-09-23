import { Card } from "@mui/material";
import React from "react";

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
    <Card>
      <h3>$ {contractAmount}</h3>
      <p>{interestRate} % p.a.</p>
      <p>Investor: {investor}</p>
      <p>Borrower: {borrower}</p>
    </Card>
  );
};

export default Contract;
