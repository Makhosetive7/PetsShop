import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </Container>
  )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    line-height: 0;
    position: relative;
    height: 80vh;

    img{
      width: 100%;
      height: 100%;
      
    }
    article{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: yellow;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      mix-blend-mode: lighten;
    }
    div{
      background: black;
   
      
    }
    div:nth-of-type(2) {
      grid-column: 2 / 4;
    }
`
export default Banner
