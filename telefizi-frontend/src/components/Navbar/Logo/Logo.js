import React from 'react'
import styled from 'styled-components'
import logo from '../../../assest/image/logo.webp'
const LogoWrapper = styled.img`
    height:45px;
    width:auto;
    opacity:.8;
`

const Logo = () => {
    return (
        <LogoWrapper src={logo}/>
    )
}

export default Logo
