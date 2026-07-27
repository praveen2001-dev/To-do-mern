import { useState } from 'react'
import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddList from './components/AddList'
import AllList from './components/AllList'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<AllList />} />
      <Route path='/add' element={<AddList />} /> 
    </Routes>
    </>
  )
}

export default App
