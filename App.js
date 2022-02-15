import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import LogOUT from './LogOUT'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LogOUT" element={<LogOUT />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App