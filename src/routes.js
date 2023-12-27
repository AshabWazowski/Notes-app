import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Home } from './components';
import Login from './components/Login/Login';


const RoutesPath = () => {
  return (
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/' element={<Login/>}/>

</Routes>
  )
}
export default RoutesPath;
