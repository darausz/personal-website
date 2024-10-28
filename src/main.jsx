import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Room from './components/Room.jsx'
import Projects from './components/Projects.jsx'
import Test from "./components/Test.jsx"
import Bookshelf from './components/Bookshelf.jsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/personal-website'>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/test" element={<Bookshelf />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
