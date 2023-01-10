import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
    </Router>
  );
}

export default App;
