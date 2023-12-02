import './App.css';
import { Layout } from './components/Layout/Layout.jsx';
import { Home } from './components/Pages/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Pages/Register/Register.jsx';
import { Contact } from './components/Pages/Contact/Contact.jsx';
import Login from './components/Pages/Login/Login.jsx';
import { SpecificVenue } from './components/Pages/SpecificVenue/SpecificVenue';
import { Profile } from './components/Pages/Profile/Profile';
import { EditAvatar } from './components/Pages/EditAvatar/EditAvatar';
import { CreateVenue } from './components/Pages/CreateVenue/CreateVenue';
import { UserSpecificVenue } from './components/Pages/UserSpecificVenue/UserSpecificVenue';
import { UpdateVenue } from './components/Pages/UpdateVenue/UpdateVenue';
import { useState } from 'react';
import { AuthProvider } from './components/AuthContext/AuthContext';
import { InputFocusProvider } from './components/OnInputFocus/OnInputFocus';

function App() {
  
  return (
    <AuthProvider>
      <InputFocusProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/venue/:id" element={<SpecificVenue />} />
            <Route path="/account/user-venue/:id" element={<UserSpecificVenue />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/account/my-venues" element={<Profile />} />
            <Route path="/account/my-bookings" element={<Profile />} />
            <Route path="/account/update-booking" element={<Profile />} />
            <Route path="/account/edit" element={<EditAvatar />} />
            <Route path="/account/create-venue" element={<CreateVenue />} />
            <Route path="/account/update-venue/:id" element={<UpdateVenue />} />
          </Routes>
        </Layout>
      </InputFocusProvider>
    </AuthProvider>
  );
};

export default App;

