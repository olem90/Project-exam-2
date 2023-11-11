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
        <Route path="/account/user-venue/:id" element={<UserSpecificVenue />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/account/edit" element={<EditAvatar />} />
        <Route path="/account/create-venue" element={<CreateVenue />} />
      </Routes>
   </Layout>
  )
}

export default App;
