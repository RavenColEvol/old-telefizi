import React from 'react'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import styled from 'styled-components'
import Certificate from './Certificate/Certificate'
import xray from '../../assest/image/xray.webp'
import nurse from '../../assest/image/nurse.webp'
import calendar from '../../assest/image/calendar.webp'

const Certificates = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    min-height:80vh;
    @media ${props=>props.theme.media.small}
    {
        margin-top:1rem;
        flex-direction:column;
    }
`

const Certifications = () => {
    return (
        <div id="certifications" >
        <Container >
            <Title>HEALTHCARE DELIVERED AT YOUR HOME</Title>
            <Certificates>
                <Certificate src={xray} title="Doctor Appointment from Your Home" subtitle="Our doctor  will conduct a telemedicine based consultation at your home, workplace or hotel in no time, so you can get well sooner."/>
                <Certificate src={nurse} title="Paramedic Assistance" subtitle='A paramedic will visit your location to assist with the telemedicine appointment and support you through the doctor consultation process.'/>
                <Certificate src={calendar} title="Available anytime during the week" subtitle='Telefizi provides experienced private doctors to you for most days of the week, at a location of your convenience'/>
            </Certificates>
        </Container>
        </div>
    )
}

export default Certifications
