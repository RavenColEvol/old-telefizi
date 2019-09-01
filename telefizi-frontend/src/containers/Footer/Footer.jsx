import React from 'react';


import ContactUs from './ContactUs/ContactUs'
import Form from './Form/Form'
import styled from 'styled-components';
import Copywright from './Copywright/Copywright';

const Container = styled.div`
    min-height:80vh;
    padding-top:3rem;
`
const FooterContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media ${props=>props.theme.media.medium}
    {
        margin-top:1rem;
        flex-direction:column;
    }
`

export default props => (
    <>
        <Container id='contact'>  
            <FooterContainer>  
            <ContactUs/>
            <Form/>
            </FooterContainer>
        </Container>
        <Copywright/>
    </>
)