import React from 'react'
import styled from  'styled-components'
import {faGitSquare} from '@fortawesome/free-brands-svg-icons'
import {faLaptopHouse, faGraduationCap, faImages} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { About, Description, Image } from '../styles' 
const ServicesSection = () => {
    return(
        <Services>
            <Image>
                <img src="http://lorempixel.com/400/200/" />
            </Image>
            <ServiceDescription>
                <h2> Things I do</h2>
                <Cards>

                    <Card>

                        <div className="icon">
                            
                            <FontAwesomeIcon icon={faLaptopHouse} size='2x' />
                            
                            <h3>Portifolio</h3>

                        </div>

                        <p>Check work my on portfolio </p>

                    </Card>
                    <Card>

                        <div className="icon">
                            
                            <FontAwesomeIcon icon={faGraduationCap} size='2x' />
                            
                            <h3>Meus Cursos</h3>

                        </div>

                        <p>Check work my on portfolio </p>
                        
                    </Card>
                    <Card>

                        <div className="icon">
                            
                             
                        <FontAwesomeIcon icon={faImages} size='2x' />
                            
                            <h3>Hobbies</h3>

                        </div>

                        <p>Check work my on portfolio </p>
                        
                    </Card>
                    <Card>

                        <div className="icon">
                            
                            <FontAwesomeIcon icon={faGitSquare} size='2x'/>
                            
                            <h3>GitHub</h3>

                        </div>

                        <p>Check work my on portfolio </p>
                        
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )

}
const Services = styled(About)`
   h2{
       padding-top: 5rem;
    }
   p {
       width: 70%;
       padding: 2rem 0rem 4rem 0rem;
   }
`;

const ServiceDescription = styled(Description)`
   /*flex: 2;*/
`;
const Cards = styled.div`
    background: green;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;

const Card = styled.div`
    /*background: blue;*/
    padding: 1rem;
    flex-basis: 18rem;
    .icon{
       display: flex; 
       align-itens: center;

    }
    h3{
        margin-left: 1rem;
        background: #fff;
        color: black;
        padding: 1rem;

    }
`;

export default ServicesSection;