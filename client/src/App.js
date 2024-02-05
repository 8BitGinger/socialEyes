import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Banner from './components/Banner';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <MenuBar />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
