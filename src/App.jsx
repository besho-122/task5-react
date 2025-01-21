import React from 'react'
import Navbar from './componants/navbar'
import { Routes } from 'react-router-dom'
import Footer from './componants/footer'
import Home from './componants/home'
import Users from './componants/users'
import { Route } from'react-router-dom'
import Create from './componants/create'
import Details from './componants/Details'

export default function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/users" element={<Users/>} />
    <Route path="/create" element={<Create/>} />
    <Route path="/users/:id" element={<Details/>} />
    <Route path="*" element={<h2>Page Not Found !!!!</h2>} />


   </Routes>
   <Footer/>

   
   
   </>
  )
}
