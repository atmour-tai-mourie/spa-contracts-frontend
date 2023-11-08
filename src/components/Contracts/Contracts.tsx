import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorCard from '../UI/ErrorCard';
import Spinner from '../UI/Spinner';
import Contract from './Contract';

import classes from './Contracts.module.css';
import { SERVER_URL } from '../../constants';

interface ContractData {
  id: string;
  contractAmount: number;
  interestRate: number;
  borrower: string;
  investor: string;
}

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState<ContractData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contractsRequestError, setContractsRequestError] = useState(false);

  /**
   *  Sends a get request to API to retrieve all contracts from DB and updates the contracts state to contain these contracts
   */
  const fetchContractData = async () => {
    try {
      const contractsResponse = await fetch(
        `${SERVER_URL}HttpTriggerGetContracts`
      );

      const { data: contractsData } = await contractsResponse.json();
      setIsLoading(false);
      setContracts(contractsData);
    } catch (error) {
      setIsLoading(false);
      setContractsRequestError(true);
    }
  };

  useEffect(() => {
    fetchContractData();
  }, []);

  /**
   * function to pass to Error Card to reset contract request error and show form again
   */
  const resetContractsRequestError = () => {
    setIsLoading(true);
    setContractsRequestError(false);
    fetchContractData();
  };

  const contractRequestErrorMessage =
    'There was an error retrieving the contracts';

  if (contractsRequestError) {
    return (
      <ErrorCard
        resetError={resetContractsRequestError}
        errorMessage={contractRequestErrorMessage}
      />
    );
  }

  return (
    <>
      {isLoading && <Spinner />}
      {contracts.map((contract) => (
        <Contract key={contract.id} contractData={contract} />
      ))}
      {!isLoading && !contracts.length && (
        <div className={classes.no__contracts__div}>
          <p>
            There are no contracts yet! Please add one{' '}
            <Link to={'/'}>here.</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Contracts;
