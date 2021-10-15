import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useParams} from 'react-router-dom'
import {useApi} from '../hooks/useApi'
const PortfolioDetails = () => {

    const {slug} = useParams()
    const data = useApi(`/portfolio/${slug}`)
    return(
        <Detail>
            <Stats>
                <div>    
                    <Title>
                        <h1>{data?.data?.Title}</h1>
                        
                    </Title>
                    <DescriptionShort>
                    <p>  </p>
                    </DescriptionShort>
                </div>
                <Info>
                    <h3>
                        Technologies
                    </h3>
                    <Tecnologies>
                        <Tecnology>
                            <FontAwesomeIcon icon={["fab", "react"]} size="4x" /> React
                        </Tecnology> 
                        <Tecnology> 
                            <FontAwesomeIcon icon={["fab", "node-js"]} size="4x" /> Node
                        </Tecnology> 
                        <Tecnology> 
                            <FontAwesomeIcon icon={["fas", "database"]} size="4x" /> Mongo
                        </Tecnology>
                       
                    </Tecnologies>    
                </Info>
            </Stats>
            <Description>
                <p>Long description</p>
            </Description>
            <div>
                <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?cs=srgb&dl=pexels-anthony-shkraba-4348403.jpg&fm=jpg"/>
            </div>
        </Detail>
    )
}

const Detail = styled.div`
    width: 80%;
    height: 80vh;
    background: white;
    position: absolute;
    left: 10%;
    top: 15%;
    margin-bottom: 10%; 
    z-index: 10;
    img {
        width: 100%;
        object-fit:cover;
        height: 50vh;

    }
`;
const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;
const Title = styled.h1`
    color: #696969;
`;
const Description = styled.div`
    padding: 2rem 5rem;
    p{
        color: black;
    }
`;
const Info = styled.div`
    text-align: center;
    min-width: 300px;
    h3{
        color: red;
    }
    
`;
const DescriptionShort = styled(Description)`
    padding: 0;
`;

const Tecnologies = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 1rem;
    svg{
        color: #416cd5;
    }
`;

const Tecnology = styled.div`
    display: flex;
    flex-direction: column;
    
    color: #416cd5;
`;


export default PortfolioDetails;

