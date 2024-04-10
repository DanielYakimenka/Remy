import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './CSSFiles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Login from './Pages/login'
import Profile from './Pages/profile'
import View from './Pages/view'
import Signup from './Pages/signup'
import Efridge from './Pages/efridge';
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Remy" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/Remy/login" element={<Login />} />
          <Route path="/Remy/profile" element={<Profile />} />
          <Route path="/Remy/Signup" element={<Signup />} />
          <Route path="/Remy/efridge" element={<Efridge />} />
          <Route path="/Remy/view" element={<View />} />
          <Route path="/Remy/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
