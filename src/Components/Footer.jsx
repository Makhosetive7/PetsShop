import React from 'react'
import styled from 'styled-components'
import { SiFacebook } from 'react-icons/si';
import { FiTwitter} from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {

    const styles = {
        fontSize: "2.8rem",
        marginBottom: "1.5rem",
        color: "yellow"
    }
  return (
    <Container>
        <div className="social">
            <SiFacebook style = {styles} />
            <FiTwitter style = {styles}/>
            <SiInstagram style = {styles}/>
            <AiOutlineMail style = {styles}/>
        </div>
       
        <div className='details'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit molestias totam dolore ad hic voluptatem maiores dicta quae error officia quam, reiciendis ducimus incidunt delectus obcaecati quis? Pariatur, repellat eveniet!
                Debitis doloremque numquam impedit, animi voluptas repellat, cum dicta ratione temporibus quidem culpa consectetur libero, eaque qui consequatur incidunt expedita magnam sapiente! Alias, numquam. Veniam temporibus debitis beatae laboriosam laborum.
                Eum omnis distinctio accusamus blanditiis, maxime necessitatibus aliquid dignissimos fuga, consectetur ea atque. Voluptatibus doloremque at enim ad similique obcaecati ipsum? Debitis nesciunt id consectetur? Amet repudiandae porro error sed!
                Illo, debitis quaerat. Voluptas, porro. Numquam eligendi fugiat facere vero esse saepe ut, ullam, quibusdam deleniti adipisci tempore omnis quae modi mollitia placeat voluptatem recusandae maiores minus consequatur ipsa quos.
                Earum, corporis quas! Error natus impedit illo in, nemo vitae cumque quo adipisci eos reiciendis suscipit architecto quibusdam molestias, accusamus mollitia saepe, aliquam hic facere. Repudiandae neque suscipit ad possimus!
                Neque iste tempore ab quos itaque quaerat iure optio ipsum quas, odit veritatis numquam, dolores minus fuga ad perspiciatis! Illum, ducimus iure. Mollitia laborum non ad voluptates dolore, atque optio.
            </p>
        </div>

    </Container>
  )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 2fr));
    width: 100%;
    padding: 2rem;
    background-color: #292a2e;
    color: white;
    
    .social{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .details{
        line-height: 1.5rem;
        padding-right: 4rem;
        padding-top: 2rem;
    }
`
export default Footer