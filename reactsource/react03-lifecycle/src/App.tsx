import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNavi from './TopNavi'
import Lifecycle from './Lifecycle'

function App() {

  return (
    <>
     <TopNavi/>
     <Routes>
      <Route path='/' element={<Lifecycle/>}/>
     </Routes>
    </>
  )
}

export default App
