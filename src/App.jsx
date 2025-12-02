import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Rutas from './pages/Rutas'
import Creditos from './pages/Creditos'
import { FaGithub } from "react-icons/fa";
import ListaRutas from './pages/ListaRutas'
import Ruta from './pages/Ruta'

function App() {


  return (
    <>
    <header>
      <h1>Rutas de tu Tierra</h1>
      <nav className='nav-superior'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/rutas">RUTAS</Link></li>
          <li><Link to="/lista-rutas">LISTA DE RUTAS</Link></li>
        </ul>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/rutas' element={<Rutas/>}></Route>
          <Route path='/lista-rutas' element={<ListaRutas/>}></Route>
          <Route path='/ruta/:id' element={<Ruta/>}></Route>
        </Routes>
      </main>
      <footer>
        <p>
          &copy; 2025, Vicky - Alcorcón 
          | <a href="https://github.com/victoriacormen" target='_blank'><FaGithub/></a>
        </p>
      </footer>
    </>
  )
}

export default App
