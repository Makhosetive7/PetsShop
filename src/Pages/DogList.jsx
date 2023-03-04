import React, { useEffect, useState } from 'react'
import SingleDog from './SingleDog'
import styled from 'styled-components'

const DogList = () => {


    const [dogData, setDogData] = useState([])


//Calling firebase API using Async and wait
    const getData = async() => {
        const API = await fetch("https://dogsite-data-default-rtdb.firebaseio.com/.json")
        const data = await API.json()
        console.log(data)

//changing objects so that they could be accessed using map function in JSX code
        const dogInformation = [];
        for (const key in data) {
            const dogInfoe = {
                id: key,
                ...data[key]
            };
            dogInformation.push(dogInfoe)   
        }
        setDogData(dogInformation)
    }

    useEffect(() =>{
        getData()
    },[])
   
  return (
    <Container>
    
            {
                dogData &&

                dogData.map(({title, description}) => {
                    return(
                        <SingleDog
                            name = {title}
                            description = {description}
                        />
                            
                        
                )
                })
            }
      
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    width: 100%;
  
`

export default DogList
