import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const fetchContractData = async () => {
    const contractsResponse = await fetch(
      "http://localhost:7071/api/HttpTrigger2"
    );

    const contractsData = await contractsResponse.json();
    console.log(contractsData);

    setContracts(contractsData);
  };

  useEffect(() => {
    fetchContractData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      {contracts.map((contract) => (
        <Contract contractData={contract} />
      ))}
    </>
  );
};

export default Contracts;
