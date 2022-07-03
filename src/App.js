import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from "./pages/component/Navbar";
import Contactus from './pages/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<Contactus/>} />




    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
