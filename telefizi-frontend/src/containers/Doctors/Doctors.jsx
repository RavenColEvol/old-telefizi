import React from 'react'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import styled from 'styled-components'
import Doctor from './Doctor/Doctor'
import doctor1 from '../../assest/image/Vivek.webp'
import doctor2 from '../../assest/image/Atul.webp'
import doctor3 from '../../assest/image/Anil.webp'
import doctor4 from '../../assest/image/Girish.webp'

const DoctorContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    min-height:80vh;
    @media ${props=>props.theme.media.small}
    {
        margin-top:2rem;
        flex-direction:column;
    }
`

const Doctors = (props) => {
    return (
        <div id="certifications" style={{background:'#f2f2f2'}}>
        <Container>
            <Title>Meet The Team of Doctors</Title>
            <DoctorContainer>
                <Doctor src={doctor1} title="Dr. Vivek Shete" subtitle='Dr. Shete has been working as a General Physician for past 8 years. He has particular interest in usage of both allopathic and ayurvedic medicines to treat chronic diseases.'/>
                <Doctor src={doctor2} title="Dr. Atul Rode"subtitle='Dr. Atul Rode is a highly experienced doctor with 10+ years of experience. He has trained with some of the best doctors in the country and is expert at usage of allopathic and ayurvedic treatments.' />
                <Doctor src={doctor3} title="Dr. Anil Pansambal" subtitle='Dr. Anil has over 10 years of experience in treating patients for variety of illnesses. His expertise is in usage of allopathic  and ayurvedic treatments to manage wide range of diseases including chronic ones.'/>
                <Doctor src={doctor4} title="Dr. Girish Gaikwad" subtitle='Dr. Girish is a highly qualified MBBS (General Physician) having more than 8 years of experience and is specialized in diagnosing, treating and managing illness and diseases.'/>
            </DoctorContainer>
        </Container>
        </div>
    )
}

export default Doctors

