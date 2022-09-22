import React from "react";
import Container from "@mui/material/Container";

import "./App.css";
import ContractForm from "./components/ContractForm/ContractForm";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <ContractForm />
      </Container>
    </div>
  );
}

export default App;
