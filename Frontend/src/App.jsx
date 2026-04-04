import React from 'react'
import './App.css'
import Home from './Home/Home.jsx'
import {Route, Routes} from "react-router-dom"
import Courses from './courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
  )
}

export default App
