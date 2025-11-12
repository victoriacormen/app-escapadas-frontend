import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Rutas from './pages/Rutas'
import Creditos from './pages/Creditos'
import { FaGithub } from "react-icons/fa";

function App() {


  return (
    <>
    <header>
      <h1>Rutas de tu Tierra</h1>
      <nav className='nav-superior'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/rutas">RUTAS</Link></li>
          <li><Link to="/creditos">CREDITOS</Link></li>
        </ul>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/rutas' element={<Rutas/>}>Home</Route>
          <Route path='/creditos' element={<Creditos/>}>Home</Route>
        </Routes>
      </main>
      <footer>
        <p>
          &copy; 2025, Vicky - Alcorcón 
          <a href="https://github.com/victoriacormen" target='_blank'><FaGithub/></a>
        </p>
      </footer>
    </>
  )
}

export default App
