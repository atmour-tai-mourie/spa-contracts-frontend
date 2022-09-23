import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import ContractForm from "./components/ContractForm/ContractForm";
import Header from "./components/UI/Header";
import Contracts from "./components/Contracts/Contracts";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<ContractForm />} />
          <Route path="contracts" element={<Contracts />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
