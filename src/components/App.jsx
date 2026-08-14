import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import WhatsAppButton from './WhatsAppButton';

export default function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <WhatsAppButton />
    </Router>
  );
}