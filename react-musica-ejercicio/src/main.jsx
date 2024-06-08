import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Canciones } from './components/Canciones.jsx'
import { Cancion } from './components/Cancion.jsx'
import PageNavbar from './components/PageNavbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageNavbar />
      <Routes>
        <Route path="/" element={<Canciones />} />
        <Route path="/cancion/:ID" element={<Cancion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
