import React from 'react';
import './App.css';
import LoginPage from './pages/loginPages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
