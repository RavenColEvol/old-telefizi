import React from 'react'
import Project from './Project/Project'
import doctor from '../../../assest/image/doctor.webp'
import doctor1 from '../../../assest/image/doctor2.webp'
const Projects = () => {
    return (
        <>
            <Project target  title={'New Doctor Appointment'} stack={'15 min ₹399'} imgurl={doctor} link={'http://ravencolevol.github.io/intershala'}>
                A doctor appointment including a free follow-up consultation.
            </Project>
            <Project target title={'Follow Up Appointment'} stack={'10 min ₹199'} imgurl={doctor1} link={'https://raven-movie.netlify.com/'}>
                Follow-up appointment
            </Project>
        </>
    )
}

export default Projects
