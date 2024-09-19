import React from 'react';
import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from 'react-router-dom';
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>A1</h1>
      <p>Developed by: Na Zhou</p> 
      
      <TOC />
      <a href="https://github.com/JoannaNNA/kanbas-react-web-app.git" id="wd-github">GitHub Repository</a>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
