// import { useState } from 'react'

import {Route, Routes , useLocation} from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import InputField from './components/Input'
import Login from './page/Login'
import Signup from './page/Signup'
import Home from './page/Home'
import UploadCode from './page/UploadCode'
import NavBar from './components/NavBar'

function App() {
 const {pathname} = useLocation();
  return (
    <> 
    {pathname !== "/login" && pathname !== "/signup"  && <NavBar /> }
    <Routes> 
    <Route path='/home' element={ <Home />} />
    <Route path='/login' element={ <Login />} />
    <Route path='/signup' element={ <Signup />} />
    <Route path='/uploadcode' element={ <UploadCode />} />
     
    </Routes>
    </>
  )
}

export default App
