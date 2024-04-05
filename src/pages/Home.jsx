import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Slider from '../components/Slider'

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
