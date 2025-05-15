import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents/AllHomeComponents'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsSeparate from './Components/AboutUsSeparate/AboutUsSeparate'
import MegaNavigation from "./Components/MegaNavigation/MegaNavigation"
import Footer from './Components/Footer/Footer'
import Career from './Components/Career/Career'
import Blogs from './Components/Blogs/Blogs'
import SeparateBlog from './Components/Blogs/SeparateBlog/SeparateBlog'
function App() {
  return (
    <>
      <Router>
        <MegaNavigation/>
        <Routes>
          <Route path='/' element={<AllHomeComponents />} />
          <Route path='/about-us' element={<AboutUsSeparate />} />
          <Route path='/career' element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<SeparateBlog />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
