import {Routes,Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import AddItems from './additems.jsx'
import Mainpage from './mainpage.jsx'
import Register from './Registration.jsx'
import Pro from './pro.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
        <div className="wholecontent">
        <Navbar/>
        <Mainpage/>
        </div>
        </>
      }/>
      <Route path='/additems' element={
        <>
        <AddItems/>
        </>
      }/>
      <Route path='/Register' element={
        <>
        <Register/>
        </>
      }/>
      <Route path='/pro' element={
        <>
        <Pro/>
        </>
      }/>
    </Routes>
  )
}

export default App