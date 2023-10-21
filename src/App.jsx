//import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Pages/Register/Register.jsx';
import { Contact } from './components/Pages/Contact/Contact';
import Login from './components/Pages/Login/Login';

function App() {
  
  return (
   <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </Layout>
  )
}

export default App;
