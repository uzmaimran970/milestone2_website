
import React from 'react'
import Navbar from './components/navbar'
import Header from "./components/header"
import Header2 from "./components/header2"
import ProductList from './components/productlist'
import Equipmentlist from "./components/equipmentlist"
import Ctasection from './components/Ctasection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Header2/>
      <ProductList/>
      <Equipmentlist/>
      <Ctasection />
      <Footer/>
      
      
    </div>
  )
}

export default page
