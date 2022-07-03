import { BrowserRouter, Route, Routes, Link,useLocation} from "react-router-dom";
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Letters from "./Components/Letters";
import './App.scss';
import Retrospect from "./Components/Retrospect";

function App() {

  return (
    <div className="App h-screen w-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Main/>
          }>
          </Route>
          <Route path="/letters" element={
            <Letters/> 
          }>
          </Route>
          <Route path="/retrospect" element={
            <Retrospect/> 
          }>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
