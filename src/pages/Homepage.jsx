import React from 'react'
import Bulletin from '../components/Bulletin'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Sliders from '../components/Sliders'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Bulletin/>
        <Navbar/>
        <Sliders/>
        <Categories/>
        <Products />
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homepage