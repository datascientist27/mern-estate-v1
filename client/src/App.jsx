import {BrowserRouter,Routes, Route} from 'react-router-dom'


import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './component/Header'

export default function App() {
  return (
   <BrowserRouter>

      <Header/>
      <Routes>

           <Route    path='/' element={<Home/>}/>
           <Route    path='/signIn' element={<SignIn/>}/>
           <Route    path='/signUp' element={<SignUp/>}/>
           <Route    path='/about' element={<About/>}/>

      </Routes>
   </BrowserRouter>
  )
}
