import React from 'react';
import Lab1 from "./Lab1";
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Developed by: Na Zhou</p> 
      <p>
          <Link to="/Landingpage">Back to Landing Page</Link> {/* Link added here */}
      </p>
      
      <TOC />
      <a href="https://github.com/JoannaNNA/kanbas-react-web-app.git" id="wd-github">GitHub Repository</a>
      
      <Routes>
        <Route path="/" element={<Navigate to="lab1" />} />
        <Route path="lab1/*" element={<Lab1 />} />
        <Route path="lab2/*" element={<Lab2 />} />
        <Route path="lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
