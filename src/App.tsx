import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
// CSS - imports
import './App.css'
// ASSETS - imports

// COMPONENTS - imports
import Header from './components/header';
import Home from './pages/home'
import Results from './pages/results';

function App() {
  return (
    
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
    </div>

  )
}

export default App
