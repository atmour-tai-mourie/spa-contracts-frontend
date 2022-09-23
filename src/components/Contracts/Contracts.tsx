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

  const fetchContractData = async () => {
    const contractsResponse = await fetch(
      "http://localhost:7071/api/HttpTrigger2"
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
