import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Slider from '../components/Marcas'
import Section from '../components/Section'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
      <Categories />
      <Section />
      <Footer />
    </div>
  )
}

export default Home
