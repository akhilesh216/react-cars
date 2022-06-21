
import React, { useState, useEffect } from 'react';
import List from './List'
import Form from './Form'
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';



function App() {
 
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<List />} />
        <Route path="edit/:id" element={<Form />} />
        <Route path="add" element={<Form />} />
       
      </Routes>
     
    </>
  );
}

export default App;