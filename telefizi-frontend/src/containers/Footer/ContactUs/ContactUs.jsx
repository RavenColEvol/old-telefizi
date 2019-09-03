import React from 'react'
import Marked from './../../../components/textUtil/Marked/Marked'
import styled from 'styled-components'

const P = styled.p`
    font-size:1rem;
    color:var(--color-dark-2);
    @media  ${props=>props.theme.media.small}{
        font-size:.9rem;
    }
`
const ContactWrapper = styled.div`
    flex:1;
    text-align:left;
    padding:3rem 5rem;
    @media  ${props=>props.theme.media.medium}{
        padding:2rem 1rem;
        width:90vw;
    }
    @media  ${props=>props.theme.media.small}{
        padding:2rem 0rem;
        width:90vw;
    }
`

export default props=>(
    <ContactWrapper>
        <Marked><span style={{fontSize:'1.5rem'}}>Contact Us</span></Marked>

        <P>
        Shrinath Icon Complex, Shivaji Chowk, Hinjewadi, Pune 411 057<br/>
        info@telefizi.com<br/>
        +91-75584 41361<br/>
        </P>
    </ContactWrapper>
)