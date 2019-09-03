import React from 'react'
import styled from 'styled-components'
import fof from '../../assest/image/404.svg'

const Fof = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    width:100%;

    h1{
        font-size:2rem;
        margin-top:1.5rem;
    }
    h3{
        font-size:0.9rem;
        margin-top:.5rem;
        font-family:'maven pro',sans-serif;
        font-weight:400;
        max-width:40vw;
        text-align:justify;
        text-align-last:center;
    }
    img{
        width:100%;
        height:260px;
    }
    @media ${props=>props.theme.media.medium}{
        &{
            h1{
                font-size:1.5rem;
                margin-top:1.5rem;
            }
            h3{
                font-size:0.8rem;
                margin-top:.5rem;
                font-family:'maven pro',sans-serif;
                font-weight:400;
                max-width:70vw;
                text-align:justify;
                text-align-last:center;
            }
            img{
                width:100%;
                height:200px;
            }
        }
    }@media ${props=>props.theme.media.small}{
        &{
            h1{
                font-size:1.1rem;
                margin-top:1.5rem;
                max-width:95vw;
                text-align:center;
            }
            h3{
                font-size:0.8rem;
                margin-top:.5rem;
                font-family:'maven pro',sans-serif;
                font-weight:400;
                max-width:90vw;
                text-align:justify;
                text-align-last:center;
            }
            img{
                width:100%;
                height:170px;
            }
        }
    }
`
const Button = styled.a`
    font-size:1rem;
    display:inline-block;
    background:var(--color-primary-1);
    padding:0.5rem 1rem;
    text-transform:uppercase;
    color:white;
    backface-visibility:hidden;
    margin-top:1rem;
    box-shadow:0 0.5rem 1rem #bb565677;transition:.25s all ease-in-out;
    &:hover{
        background:var(--color-primary-1);
        box-shadow:0 18px 24px -12px #bb565677;
        transform:translateY(-3px);
    }
    @media ${props=>props.theme.media.small}{
        &{
            padding:0.3rem .7rem;
            font-size:.8rem;
        }
    }
`
export default props =>(
    <>
        <Fof>
            <img alt="404 Page Not Found" src={fof}></img>
            <h1 >Oops! This Page Could Not Be Found</h1>
            <h3 >Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</h3>
            <Button href='/'>Go To Homepage &#8594;</Button>
        </Fof>
    </>
)