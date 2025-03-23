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
import ProtectedRoute from './ProtectedRoute'

function App() {
 const {pathname} = useLocation();
  return (
    <> 
    {pathname !== "/login" && pathname !== "/signup"  && <NavBar /> }
    <Routes> 
    <Route path='/signup' element={ <Signup />} />
    <Route path='/login' element={ <Login />} />
    <Route element={<ProtectedRoute />} >
    <Route path='/home' element={ <Home />} />
    <Route path='/uploadcode' element={ <UploadCode />} />
    </Route>
    </Routes>
    </>
  )
}

export default App
