import React from 'react'
import styled from 'styled-components';
import Skew from './../../../components/textUtil/Skew/Skew'

const CertificateWrapper = styled.div`
    text-align:center;
    margin:1.5rem 0;
`

const P = styled.p`
    font-size:0.9rem;
    font-family:'maven',sans-serif;
    padding:1rem 3rem ;
    text-align:justify;
    text-align-last:center;
    color:var(--color-dark-1);
    @media ${props=>props.theme.media.large}{
        font-size:0.85rem;
        color:var(--color-dark-1);
        padding:1rem 2rem;
    }
    @media ${props=>props.theme.media.medium}{
        font-size:0.75rem;
        padding:1rem 1rem;
    }
    @media ${props=>props.theme.media.small}{
        font-size:0.75rem;
        color:var(--color-dark-1);
    }
`
const Img = styled.img`
    width:350px;
    height:auto;
    @media ${props=>props.theme.media.large}
    {
        &{
            width:250px;
        }
    }
    @media ${props=>props.theme.media.medium}
    {
        &{
            width:200px;
        }
    }
    @media ${props=>props.theme.media.small}
    {
        &{
            width:280px;
            
        }
    }
    box-shadow:0 1rem 3rem rgba(0,0,0,.15);
    margin-bottom:1.4rem;
`


const Certificate = ({src,title,subtitle}) => {
    return (
        <CertificateWrapper>
            <Img src={src}></Img><br/>
            <Skew>{title}</Skew>
            <P>{subtitle}</P>
        </CertificateWrapper>
    )
}

export default Certificate
