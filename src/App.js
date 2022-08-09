import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import Login from "./components/Login";
import Header from './components/Header';
import Home from "./components/Home"

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>  
        <Header />   
            <Login />
            <Home />                 
      </BrowserRouter> 
    </div>
  );
}

export default App;
