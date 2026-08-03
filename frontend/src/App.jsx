import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import AddList from './components/AddList'
import AllList from './components/AllList'
import EditList from './components/EditList'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Protected from './components/Protected'
import './style/App.css'

export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Protected><AllList /></Protected>} />
      <Route path='/add' element={<Protected><AddList /></Protected>} />
      <Route path='/edit/:id' element={<EditList />} /> 
      <Route path='/user/signup' element={<SignUp />} /> 
      <Route path='/user/login' element={<Login />} /> 
    </Routes>
    </>
  )
}