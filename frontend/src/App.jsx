import { useState } from 'react'
import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddList from './components/AddList'
import AllList from './components/AllList'
import EditList from './components/EditList'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<AllList />} />
      <Route path='/add' element={<AddList />} />
      <Route path='/edit/:id' element={<EditList />} /> 
    </Routes>
    </>
  )
}

export default App
