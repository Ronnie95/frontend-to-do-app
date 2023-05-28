import React from 'react'
// import { ReactDOM } from 'react-router-dom';
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import ToDo from './components/ToDo';
import ToDoInfo from './components/ToDoInfo';

function App() {
  return (

    <div className="App">
      <h1>we here</h1>
      <ToDo />
      <ToDoInfo />
    </div>
    
    

   
  );
}

export default App;
