import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Header from './componetns/Header/Header'
import './App.scss'
import AdminPage from './pages/AdminPage'

const App = () => {
  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    </>
  )
}

export default App