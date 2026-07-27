import { useState } from 'react'
import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddList from './components/AddList'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h1>To Do List</h1>} />
      <Route path='/add' element={<AddList />} /> 
    </Routes>
    </>
  )
}

export default App
