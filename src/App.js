import React from 'react'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <div className='mobile-container'>
          <Navbar />
          <Hero />
    </div>
  )
}

export default App