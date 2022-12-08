import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './projectLogin/App.css';
import Login from './projectLogin/Login';
import Registration from './projectLogin/Registration';
function App() {
  return (
        <Routes>
          <Route path = "/" element={<Registration/>}/>
          <Route path = "login" element={<Login/>}/>
        </Routes>
        // <Registration/>
  );
}

export default App;