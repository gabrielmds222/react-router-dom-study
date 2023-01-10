import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import ProjetoUm from "./pages/Projetos/ProjetoUm";
import ProjetoDois from "./pages/Projetos/ProjetoDois";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetoum" element={<ProjetoUm />} />
        <Route path="/projetodois" element={<ProjetoDois />} />
      </Routes>
    </>
  );
}

export default App;
