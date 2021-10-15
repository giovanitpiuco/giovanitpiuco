import React from 'react'

import styled from 'styled-components'
import Card from '../components/Card'
//chamada backend
import { useApi } from '../hooks/useApi'

    const Portfolio = () => {
        const {data} = useApi('/portifolio')
      
        return(
            <Portfoliolist>
                <CardList>
                  
                    {data?.data?.map(project => {
                        return <Card key={project.slug} project={project}/>
                    })}
                    
                </CardList>
            </Portfoliolist>
        )
    }
const Portfoliolist = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;

`;
const CardList = styled.div`
     display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 4rem;

`;


export default Portfolio