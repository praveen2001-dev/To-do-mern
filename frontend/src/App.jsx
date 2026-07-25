import { useState } from 'react'
import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h1>To Do List</h1>} />
      <Route path='/add' element={<h1>Add List</h1>} /> 
    </Routes>
    </>
  )
}

export default App
