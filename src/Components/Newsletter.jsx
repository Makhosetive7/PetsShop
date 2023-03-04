import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Container>
        <div className='top'>
            <h1>Newsletter</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore ab nostrum dolorum quia totam, voluptatum consequuntur amet omnis ex soluta repudiandae velit officia a sed eligendi fugiat. Optio, cumque!</p>
        </div>
        <div className='inputField'>
            <input type="text" placeholder='email'/>
        </div>
        <div>
            <button>send</button>
        </div>
      
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    height: 20vh;

    .top{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
   
    }

    input{
        width: 30vw;
        height: 2.5vh;
        border: 2px solid black;
        margin-bottom: .5rem;

        ::placeholder{
            font-family: 'Orbitron', sans-serif;
            font-size: 1rem;
        }

    }
    button{
                width: 8rem;
                padding: .5rem;
                font-size: 1rem;
                font-family: 'Orbitron', sans-serif;
            }
`

export default Newsletter
