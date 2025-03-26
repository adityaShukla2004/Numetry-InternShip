import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <App />
      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login}/>
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/signup' Component={SignUp}/>
      </Routes>
    

    </Router>

  </React.StrictMode>
);


reportWebVitals();
