import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Marcas from '../components/Marcas'
import Section from '../components/Section'
import Categories from '../components/Categories'
import BannerCarousel from '../components/BannerCarousel'

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <Marcas />
      <Categories />
      <Section />
      <Footer />
    </div>
  )
}

export default Home
