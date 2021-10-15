import React from 'react'

import styled from 'styled-components'

import {faGithubSquare, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const SocialNetworkSection = () => {
    return(
        <Network>
            <Social href="http://github.com/giovanitpiuco" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size='3x'/>
                <h3>github.com/giovanipiuco</h3>
            </Social>
            <Social>
            <FontAwesomeIcon icon={faGraduationCap} size='3x'/>
                <h3>Udemy</h3>
            </Social>
            <Social>
            <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                <h3>LinkId</h3>
            </Social>
            <Social>
            <FontAwesomeIcon icon={faGraduationCap} size='3x'/>
                <h3>Youtube</h3>
            </Social>
            <Social>
            <FontAwesomeIcon icon={faTelegram} size='3x'/>
                <h3>Telegram</h3>
            </Social>
        </Network>
    )
}
const Network = styled.div`
    padding: 1rem 5rem;

`;
const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    &:hover{
        background: yellow;
        cursor: pointer;
    }
    h3{
        color: grey;
        margin: 2rem;
        

    }
    color: inherit;
`;


export default SocialNetworkSection;