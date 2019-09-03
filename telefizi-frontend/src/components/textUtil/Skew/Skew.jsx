import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    display:inline-block;
    font-family:'Product sans',sans-serif;
    font-size:1.2rem;
    
    position:relative;
    color:var(--color-dark-1);
    padding:0 .5rem;
    @media ${props=>props.theme.media.large}
    {
        &{
        font-size:1.1rem;
        }
    }
    @media ${props=>props.theme.media.medium}
    {
        &{
        font-size:1.1rem;
        }
    }
    @media ${props=>props.theme.media.small}
    {
        &{
        font-size:1rem;
        }
    }
    
`

const Skew = ({children}) => {
    return (
        <P>{children}</P>
    )
}

export default Skew
