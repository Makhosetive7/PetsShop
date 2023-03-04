import React from 'react'
import styled from 'styled-components'

const SingleDog = ({name, description}) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{description}</p>
    </Container>
  )
}


const Container = styled.div`
    
    width: 30vw;
    height: 40vh;
    border: 1px solid green;
   
`
export default SingleDog
