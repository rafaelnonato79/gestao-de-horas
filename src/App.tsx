import React from 'react';
import './App.css';
import LoginPage from './pages/loginPages/login';
import CadastroPage from './pages/cadastroPage/cadastro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/cadastro" Component = {CadastroPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
