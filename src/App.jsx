import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards'
import Featured from './components/Featured'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App