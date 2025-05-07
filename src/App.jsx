import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents/AllHomeComponents'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<AllHomeComponents />} />
        </Routes>
       </Router>
    </>
  )
}

export default App
