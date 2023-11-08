import React from 'react';
import { Card, IconButton, Typography } from '@mui/material';

import classes from './Contract.module.css';
import { Delete } from '@mui/icons-material';

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
    <Card
      className={classes.card}
      sx={{ backgroundColor: 'rgb(200, 223, 223)' }}
    >
      <div className={classes.details__container}>
        <p>${contractAmount}</p>
        <p>{interestRate} % p.a.</p>
      <div className={classes.parties__container}>
        <div>
          <Typography fontWeight="bold">Investor</Typography>
          <Typography>{investor}</Typography>
        </div>
        <div>
          <Typography fontWeight="bold">Borrower</Typography>
          <Typography>{borrower}</Typography>
        </div>
      </div>
      <div className={classes.parties__container}>
        <div>
          <Typography fontWeight="bold">Amount</Typography>
          <Typography>${contractAmount}</Typography>
        </div>
        <div>
          <Typography fontWeight="bold">Interest Rate</Typography>
          <Typography>{interestRate} % p.a.</Typography>
        </div>
      </div>
    </Card>
  );
};

export default Contract;
