import { useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom'
import searchContext from './Components/searchContext.jsx'
import Login from './Components/Login/Login.jsx'
import Landing from './Landing.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [searchRes,setSearchRes]=useState();
  return (
    <>
          <searchContext.Provider value={{searchRes,setSearchRes}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    </searchContext.Provider>

    </>
  )
}

export default App
