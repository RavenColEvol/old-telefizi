import React from 'react'
import headersvg from '../../../assest/image/header.svg'
import styled from 'styled-components'


const Div = styled.div`
    flex:1 1;
    @media ${props=>props.theme.media.small}
    {
        flex:0 0;
    }
`
const Img = styled.img`
    width:100%;
    height:370px;
    @media ${props=>props.theme.media.small}
    {
        height:300px;
    }
`
export default props =>(
    <Div>
        <Img alt="Telefizi" src={headersvg}></Img>
    </Div>
)