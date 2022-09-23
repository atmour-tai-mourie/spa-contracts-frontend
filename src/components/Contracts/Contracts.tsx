import React, { useEffect, useState } from "react";
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

  /**
   *  Sends a get request to API to retrieve all contracts from DB and updates the contracts state to contain these contracts
   */
  const fetchContractData = async () => {
    const contractsResponse = await fetch(
      "https://tai-rest-api.azurewebsites.net/api/httptriggergetcontracts"
    );

    const contractsData = await contractsResponse.json();
    setContracts(contractsData);
  };

  useEffect(() => {
    fetchContractData().catch((error) => {
      console.log(error);
    });
    setIsLoading(false);
  }, []);

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
