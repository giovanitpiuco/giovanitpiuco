import styled from 'styled-components'

export const About = styled.div`
    
    min-height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10rem;
    color: white;
    
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 3rem;
    z-index: 1;
    h2{
        font-weight: lighter;
        color: yellow;
    }
`;


export const Image = styled.div`

    z-index: 1;
    flex: 1;
    overflow: hidden;
    img {
        width: 95%;
        height: 45%;
        object-fit: cover; 
    }
`;