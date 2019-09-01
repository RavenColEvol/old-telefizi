import React from 'react'
import styled from 'styled-components';
import Skew from './../../../components/textUtil/Skew/Skew'

const CertificateWrapper = styled.div`
    text-align:center;
    margin:1.5rem 0;
    p{
        padding:.2rem;
    }
`

const P = styled.p`
    font-size:1rem;
    padding:1rem 3rem !important;
    @media ${props=>props.theme.media.medium}{
        font-size:0.85rem;
        color:var(--color-dark-1);
    }
`
const Img = styled.img`
    width:350px;
    height:auto;
    @media ${props=>props.theme.media.medium}
    {
        width:230px;
    }
    @media ${props=>props.theme.media.small}
    {
        width:280px;
    }
    box-shadow:0 1rem 3rem rgba(0,0,0,.15);
    margin-bottom:1.4rem;
`


const Certificate = ({src,title,subtitle}) => {
    return (
        <CertificateWrapper>
            <Img src={src}></Img><br/>
            <h1><Skew>{title}</Skew></h1>
            <P>{subtitle}</P>
        </CertificateWrapper>
    )
}

export default Certificate
