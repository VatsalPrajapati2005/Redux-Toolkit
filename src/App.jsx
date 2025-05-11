import React from 'react'
import {BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import View from './pages/View'
import Error from './pages/Error'
import Update from './pages/Update'
const App = () => {
  return (
    <>
   <Routers>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="*" element={<Error />} />
          <Route path='/update/:userId' element={<Update/>}/>
        </Routes>
        <Footer />
      </Routers>
    </>
  )
}

export default App