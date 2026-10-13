
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Topnevi from './declarative/nev1/Topnevi'
import Home from './declarative/nev1/Home'
import NotFound from './declarative/nev1/NotFound'
import CommonLayout from './declarative/nev1/CommonLayout'
import LayoutIndex from './declarative/nev1/LayoutIndex'
import RouterHooks from './declarative/nev1/RouterHooks'


// react-router-dom > URL관리, 이력관리



function App() {

  return (
    <>
      <Topnevi/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/intro'element={<CommonLayout/>} >
          <Route index element={<LayoutIndex/>}/>
          <Route path="router" element={<RouterHooks/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
