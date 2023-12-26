import React from 'react'
import MainPage from './pages/beforelogin/MainPage'
import AddressFill from './pages/beforelogin/AddressFill'
import StorePage from './pages/beforelogin/StorePage'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/start" element={<AddressFill />}/>
      <Route path="/store" element={<StorePage />}/>
    </Routes>
  )
}

export default App