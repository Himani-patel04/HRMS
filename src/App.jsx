
import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  // ❌ Navbar sirf login pages par hide
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      {/* Navbar condition */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            <div className="grid w-full h-screen place-items-center bg-gray-300">
              <Login />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div className="grid w-full h-screen place-items-center bg-cyan-400">
              <Login />
            </div>       
          }
        />

        {/* Dashboard (login ke baad) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;

