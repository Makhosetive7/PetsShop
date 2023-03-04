import React from 'react'

import Navigation from './Components/Navigation'
import DogList from './Pages/DogList'
import LandingPage from './Pages/LandingPage'

const Home = () => {
  return (
    <div>
      <Navigation />
      <LandingPage/>
      <DogList />

    </div>
  )
}

export default Home
