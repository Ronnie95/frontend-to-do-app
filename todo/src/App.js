import React from 'react'
// import { ReactDOM } from 'react-router-dom';
import {Routes, Route} from "react-router-dom"
import './App.css';
import ToDo from './components/ToDo';
import ToDoShow from './components/ToDoShow';
import ToDoEdit from './components/ToDoEdit';
import home from './pages/home';
import ToDoDelete from './components/ToDoDelete';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
      <h1 className='title'>My To Do List</h1>
      {home()}
      <Routes>
        <Route path='/todo'>
          <Route path='' element={<ToDo />} />
        </Route>
        <Route path='/:todoId'>
          <Route path='' element={<ToDoShow />} />
          <Route path="edit" element={<ToDoEdit/>} />
          <Route path="delete" element={<ToDoDelete />} />
        </Route>
      </Routes>
    
    </div>
    
    

   
  );
}

export default App;


// "/todo" todo index


// "/__?___" 
// "/400" show page
// "/400/edit" edit page
// "/400/delete" delete

// "/books/400" show page
// "/books/400/edit" edit pagew