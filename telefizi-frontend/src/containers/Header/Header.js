import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent/HeaderContent'

const HeaderWrapper = styled.div`
    margin-top:4rem;
    min-height:90vh;
    width:100vw;
    display:flex;
    align-items:center;
    color:white;
    background:#f2f2f2;
    @media ${props=>props.theme.media.small}
    {
        margin-top:1rem;
    }
`
const Header = () => {
    return (
        <div id="header">
            <HeaderWrapper>
                <HeaderContent/>
            </HeaderWrapper>
        </div>
    )
}

export default Header
