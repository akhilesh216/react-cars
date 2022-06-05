
import React, { useState, useEffect } from 'react';
import List from './List'
import Form from './Form'
import { Routes, Route, Link } from "react-router-dom";



function App() {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<List />} />
        <Route path="add" element={<Form />} />
      </Routes>
     
    </>
  );
}

export default App;