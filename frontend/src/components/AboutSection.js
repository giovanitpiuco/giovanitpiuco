import React from 'react'
import {About, Description, Image} from '../styles'
//import image from './5.jpg';

import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Giovani</h2>
                <h2>check my</h2>
                <p>Falando um pouco de você.</p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src="http://lorempixel.com/400/200/" />
            </Image>
        </About>
    )
}

const Titulo = styled.div `
  color: white;
`


export default AboutSection