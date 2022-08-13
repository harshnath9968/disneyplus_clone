import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import React from 'react';
import Login from "./components/Login";
import Header from './components/Header';
import Home from "./components/Home"
import Details from "./components/Details";

function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
