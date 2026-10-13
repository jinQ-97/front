import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNevi from './component/common/TopNevi'
import UseStateExam from './component/01-usestate/UseStateExam'

function App() {


  return (
    <>
     <TopNevi/>
     <Routes>
        <Route path='/' element={<UseStateExam/>}/>
        <Route path='/use-state' element={<UseStateExam/>}/>
        <Route path='/use-reducer1' element={<UserReducerExam/>}/>
     </Routes>
    </>
  )
}

export default App
