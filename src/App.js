import React from 'react'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card'

const App = () => {
  return (
    <div className='mobile-container'>
          <Navbar />
          <Hero />
          <Card />
    </div>
  )
}

export default App