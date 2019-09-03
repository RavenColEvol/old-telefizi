import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button/Button'
import Skew from '../../../../components/textUtil/Skew/Skew'


const ProjectWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:${props=>props.reverse?'row-reverse':'row'}
    margin-top:3rem;
    padding:0 9rem;
    
    @media ${props=>props.theme.media.medium}
    {
        flex-direction:column;
        align-items:center;
        margin-top:1.5rem;
        padding:0;
    }
`

const Img = styled.img`
    width:500px;
    box-shadow:0 1rem 3rem rgba(0,0,0,.15);
    text-align:center;
    flex:1 0;
    @media ${props=>props.theme.media.medium}
    {
        width:280px;
    }
`
const P = styled.p`
    max-width:500px;
    font-size:1.1rem;
    margin:1rem 0 1.5rem 0;
    @media ${props=>props.theme.media.medium}{
    }
`
const Div = styled.div`
    margin:0 3rem;
    text-align:left;
    flex:1;
    @media ${props=>props.theme.media.medium}
    {
        margin:0;
        padding:1rem 3rem;
    }
`
const Stack = styled.p`
    font-size:1rem;
    color:var(--color-primary-3);
    font-weight:bold;
    margin-bottom:1rem;
`
const Center = styled.div`

    text-align:center;
    margin:5rem 0;
    @media ${props=>props.theme.media.medium}
    {
        margin:3rem 0;
    }
`
const CenterMobile = styled.div`
    @media ${props=>props.theme.media.medium}{
        text-align:center;
    }
`
const Project = ({imgurl,children,link,stack,title,reverse}) => {
    return (
    <Center>
        <Skew>{title}</Skew>
        <ProjectWrapper reverse={reverse}>
            <Img src={imgurl}></Img>
            <Div>
                <P>{children}</P>
                <CenterMobile>
                <Stack>{stack}</Stack>
                    <Button target="_blank" href={link}>
                        <span style={{paddingLeft:5}}>Book Now</span>
                    </Button>
                </CenterMobile>
            </Div>
        </ProjectWrapper>
    </Center>
    )
}

export default Project
