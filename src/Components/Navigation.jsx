import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Container>
      <ul>
        <li>
            <Link to="/addnewdog">Add</Link>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 2px solid pink;
`

export default Navigation
