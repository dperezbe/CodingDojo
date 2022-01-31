import "./App.css";
import React from "react";
import Productinfo from "./components/Productinfo";
import Product from "./components/Product";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductUpdate from "./components/ProductUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/:id" element={<Productinfo />} />
          <Route exact path="/:id/edit" element={<ProductUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
