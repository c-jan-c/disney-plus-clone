import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path='/login' element={
            <>
              <SignIn />
            </>
          }/>
          <Route path='/home' element={
            <>
              <Home/>
            </>
          }/>
          <Route path='/details/:id' element={
            <>
              <Details />
            </>
          }/>
          <Route path='/' element={
            <>
              <Login />
            </>
          }/>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
