import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap CSS
import './App.css'; // Importa o CSS customizado
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
