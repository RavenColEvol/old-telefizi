import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    display:inline-block; 
    vertical-align:center;
    text-transform:uppercase;
    font-weight:700;
    background:var(--color-primary-2);
    box-shadow:0 0.5rem 1rem #bb565677;
    border-radius:2px;
    transition:.25s all ease-in-out;
    padding:.8rem 2rem;
    color:white;
    font-size:.7rem;
    letter-spacing:.1rem;
    @media ${props=>props.theme.media.medium}{
        padding:.6rem 2rem;
        font-size:.7rem;
        letter-spacing:.1rem;
    }
    &:hover{
        background:var(--color-primary-1);
        box-shadow:0 18px 24px -12px #bb565677;
        transform:translateY(-3px);
    }
`
const Button = ({children,href,target}) => {
    return (
        <StyledButton href={href} target={target?"_blank":''}>
            {children}
        </StyledButton>
    )
}

export default Button
