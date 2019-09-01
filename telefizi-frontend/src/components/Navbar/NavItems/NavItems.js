import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import styled from 'styled-components';

const NavItemsWrapper = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    @media ${props=>props.theme.media.medium}{
        justify-content:center;
        flex-direction:column;
    }
`

const NavItems = ({clicked}) => {
    return (
        <BrowserRouter>
            <NavItemsWrapper>
                <NavItem click={clicked} to="#">Home</NavItem>
                <NavItem click={clicked} to="#certifications">about us</NavItem>
                <NavItem click={clicked} to="#bookonline">Book online</NavItem>
                <NavItem click={clicked} to="#contact">contact</NavItem>            
            </NavItemsWrapper>
        </BrowserRouter>
    )
}

export default NavItems
