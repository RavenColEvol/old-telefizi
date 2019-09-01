import React from 'react'
import styled from 'styled-components';
import Marked from './../../../components/textUtil/Marked/Marked'

const DoctorWrapper = styled.div`
    text-align:center;
    margin:1.5rem 0;
    p{
        padding:.2rem;
    }
    flex:1 1;
`

const P = styled.p`
    font-size:.85rem;
    padding:1rem 3rem !important;
`
const Img = styled.img`
    width:200px;
    height:auto;
    border-radius:50%;
    @media ${props=>props.theme.media.medium}
    {
        width:200px;
    }
    @media ${props=>props.theme.media.small}
    {
        width:170px;
    }
    box-shadow:0 1rem 3rem rgba(0,0,0,.15);
    margin-bottom:1.4rem;
`


const Doctor = ({src,title,subtitle}) => {
    return (
        <DoctorWrapper>
            <Img src={src}></Img><br/>
            <h1><Marked>{title}</Marked></h1>
            <P>{subtitle}</P>
        </DoctorWrapper>
    )
}

export default Doctor
