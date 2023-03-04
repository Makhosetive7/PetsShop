import React from 'react'
import styled from 'styled-components'

const OurStory = () => {
  return (
    <Container>
        <div className='top'>
            <p>Providing every dog breed you need</p>
            <h3>Come Pet with Us</h3>
        </div>
        <div className='sections'>
            <div>
                <h1>0ur Story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam sed aperiam amet consequatur eius quod in, quia nulla doloribus iure veritatis esse perferendis quisquam laboriosam eum dolorum sint itaque!atibus adipisci ea sed non ullam enim.</p>
                <button>read more</button>
                
            </div>
            <div>
                <h1>what we do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam sed aperiam amet consequatur eius quod in, quia nulla doloribus iure veritatis esse perferendis quisquam laboriosam eum dolorum sint itaque!atibus adipisci ea sed non ullam enim.</p>
                <button>read more</button>
            </div>
            <div>
                <h1>working Hours</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam sed aperiam amet consequatur eius quod in, quia nulla doloribus iure veritatis esse perferendis quisquam laboriosam eum dolorum sint itaque!atibus adipisci ea sed non ullam enim.</p>
                <button>read more</button>
            </div>
        </div>
      
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 95%;
    margin: 1rem auto;
    background-color: #292a2e;
    color: white;

    .top{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
    }
    .sections{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 auto;
        
   

        div{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 30vw;
            margin: 1rem;
            padding: 2.3rem;
            border: 2px solid yellow;

            button{
                width: 8rem;
                padding: .5rem;
                font-size: 1rem;
                font-family: 'Orbitron', sans-serif;
            }
            
            }
        
    }

`
export default OurStory
