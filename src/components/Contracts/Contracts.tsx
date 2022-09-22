import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Contract {
  contractID: string;
  contractAmount: number;
  interestRate: number;
  borrower: string;
  investor: string;
}

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
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
        <Card>
          <h3>{contract.contractAmount}</h3>
        </Card>
      ))}
    </>
  );
};

export default Contracts;
