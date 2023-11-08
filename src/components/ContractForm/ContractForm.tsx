import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, Button } from '@mui/material';

import classes from './ContractForm.module.css';
import ErrorCard from '../UI/ErrorCard';
import { SERVER_URL } from '../../constants';

interface ContractData {
  contractAmount: number;
  interestRate: number;
  borrower: string;
  investor: string;
}

const ContractForm: React.FC = () => {
  const navigate = useNavigate();
  const [submissionError, setSubmissionError] = useState(false);

  const contractAmountInput = useRef<HTMLInputElement>(null);
  const interestRateInput = useRef<HTMLInputElement>(null);
  const borrowerInput = useRef<HTMLInputElement>(null);
  const investorInput = useRef<HTMLInputElement>(null);

  /** Sends new contract data to API to add the contracts table in database
   *
   * @param contractData
   */
  const postContractData = async (contractData: ContractData) => {
    try {
      const postResponse = await fetch(
        `${SERVER_URL}HttpTriggerAddContractToDB`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contractData),
        }
      );

      if (!postResponse.ok) {
        throw new Error('Something went wrong');
      }
      navigate('/contracts');
    } catch (error) {
      setSubmissionError(true);
    }
  };

  /** Handles form submit event and prepares contract data to post to API
   *
   * @param event
   */
  const submitNewContract = (event: React.FormEvent) => {
    event.preventDefault();

    const contractAmount = Number(contractAmountInput.current?.value);
    const interestRate = Number(interestRateInput.current?.value);
    const borrower = String(borrowerInput.current?.value);
    const investor = String(investorInput.current?.value);

    const contractData = {
      contractAmount,
      interestRate,
      borrower,
      investor,
    };

    postContractData(contractData);
  };

  /**
   * function to pass to Error Card to reset submission error and show form again
   */
  const resetSubmissionError = () => {
    setSubmissionError(false);
  };

  const submissionErrorMessage = 'There was an error submitting this contract';

  if (submissionError) {
    return (
      <ErrorCard
        resetError={resetSubmissionError}
        errorMessage={submissionErrorMessage}
      />
    );
  }

  return (
    <form className={classes.contract__form} onSubmit={submitNewContract}>
      <h2 className={classes.contract__title}>New Contract</h2>
      <TextField
        id="contractAmount"
        label="Contract Amount"
        variant="outlined"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          inputProps: { min: 1000 },
        }}
        inputRef={contractAmountInput}
        required
      />
      <TextField
        id="interestRate"
        label="Interest Rate"
        variant="outlined"
        type="number"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">% p.a.</InputAdornment>
          ),
          inputProps: { min: 0.01, max: 200, step: 0.01 },
        }}
        inputRef={interestRateInput}
        required
      />
      <TextField
        id="borrower"
        label="Borrower"
        variant="outlined"
        inputRef={borrowerInput}
        required
      />
      <TextField
        id="investor"
        label="Investor"
        variant="outlined"
        inputRef={investorInput}
        required
      />
      <Button variant="contained" className={classes.button} type="submit">
        Submit Contract
      </Button>
    </form>
  );
};

export default ContractForm;
