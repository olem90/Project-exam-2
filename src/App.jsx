//import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout.jsx';
import { Home } from './components/Pages/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Pages/Register/Register.jsx';
import { Contact } from './components/Pages/Contact/Contact.jsx';
import Login from './components/Pages/Login/Login.jsx';
import { SpecificVenue } from './components/Pages/SpecificVenue/SpecificVenue';

function App() {
  
  return (
   <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/venue/:id" element={<SpecificVenue />} />
      </Routes>
   </Layout>
  )
}

export default App;
