import { truncate } from "fs";
import React, { useEffect, useState } from "react";
import ErrorCard from "../UI/ErrorCard";
import Spinner from "../UI/Spinner";
import Contract from "./Contract";

interface ContractData {
  contractID: string;
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
        // "https://tai-rest-api.azurewebsites.net/api/httptriggergetcontracts"
        "http://localhost:7071/api/HttpTriggerGetContracts"
      );

      const contractsData = await contractsResponse.json();
      setIsLoading(false);
      setContracts(contractsData);
    } catch (error) {
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
    "There was an error retrieving the contracts";

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
        <Contract key={contract.contractID} contractData={contract} />
      ))}
    </>
  );
};

export default Contracts;
