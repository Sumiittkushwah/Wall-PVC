import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';

import Navbar from './Navbar';
import Topbar from './Topbar'
import WhatsAppButton from './WhatsAppButton';
import Aboutpage from './Aboutpage'

export default function App() {
  return (
    <Router >
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
      </Routes>
        <WhatsAppButton />
    </Router>
  );
}