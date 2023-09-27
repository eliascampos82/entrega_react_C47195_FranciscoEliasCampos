//import React from 'react'
import NavBar from './components/NavBar/NavBar'
//import Fondo from "./components/fondo/Fondo.jsx"
import ItemListContainer from './components/Items/ItemListContainer'
//import ItemDetailContainer from './components/Details/ItemDetailContainer'
import Home from './pages/Home'
//import Hombre from './pages/Hombre'
//import Mujer from './pages/Mujer'
import { Route, Routes } from 'react-router'
//import { Link } from 'react-router-dom'
import Detalle from './pages/Detalle'
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cat/:id" element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<Detalle />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App