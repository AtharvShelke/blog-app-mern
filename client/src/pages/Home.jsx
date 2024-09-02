import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import PostContainer from '../components/PostContainer'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PostContainer/>
      <Footer/>
    </>
  )
}

export default Home