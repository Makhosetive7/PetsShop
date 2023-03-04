import React from 'react'
import styled from 'styled-components'
import Navigation from '../Components/Navigation'
import Banner from '../Components/Banner'
import OurStory from '../Components/OurStory'
import Newsletter from '../Components/Newsletter'
import Counter from '../Components/Counter'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <Container>
      <section>
        <Navigation/>
      </section>
      <section>
        <Banner/>
      </section>
      <section >
        <OurStory />
      </section>
      <section>
        <Newsletter/>
      </section>
      <section>
        <Counter />
      </section>
      <section>
        <Footer/>
      </section>
    </Container>

  )
}

const Container = styled.div`
    width: 100%;
    

`

export default LandingPage
