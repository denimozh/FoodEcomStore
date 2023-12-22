import React from 'react'
import MainPage from './pages/beforelogin/MainPage'
import AddressFill from './pages/beforelogin/AddressFill'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/start" element={<AddressFill />}/>
    </Routes>
  )
}

export default App