import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Switch from "react-switch"; 
import React from 'react';
import Login from "./components/Login";
import Header from './components/Header';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>  
        <Header />     
            <Login />                 
      </BrowserRouter> 
    </div>
  );
}

export default App;
