import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  About,
  AddChild,
  Home,
  Login,
  Questions,
  Service,
  Register,
} from './pages';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoute from './ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/check/questions"
          element={
            <ProtectedRoute>
              <Questions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-child"
          element={
            <ProtectedRoute>
              <AddChild />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
