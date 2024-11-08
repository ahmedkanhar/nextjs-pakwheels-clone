import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Featuring from './components/featuring'
import Card from './components/card'
import Footer from './components/footer'


const page = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Hero /><br />
      <Featuring /><br />
      <Card />
      <Footer />
    </div>
  )
}

export default page