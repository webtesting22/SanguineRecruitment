import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents/AllHomeComponents'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsSeparate from './Components/AboutUsSeparate/AboutUsSeparate'
import MegaNavigation from "./Components/MegaNavigation/MegaNavigation"
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <Router>
        <MegaNavigation/>
        <Routes>
          <Route path='/' element={<AllHomeComponents />} />
          <Route path='/about-us' element={<AboutUsSeparate />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
