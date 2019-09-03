import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import BackTop from '../components/BackTop/BackTop'
const Wrapper = styled.div`
    width:100%;
    max-width:120rem;
    margin:0 auto;
    
`
const Layout = ({children}) => {
    return (
        <Wrapper>
            <Navbar/>
            {children}
            <BackTop/>
        </Wrapper>
    )
}

export default Layout;
