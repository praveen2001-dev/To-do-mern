import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import AddList from './components/AddList'
import AllList from './components/AllList'
import EditList from './components/EditList'
import './style/App.css'

export default function App() {
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