import React from 'react'
import Layout from './layout/Layout'
import Header from './containers/Header/Header'
import Certificaions from './containers/Certifications/Certifications'
import Projects from './containers/Portfolio/Portfolio'
import Doctors from './containers/Doctors/Doctors'
import Footer from './containers/Footer/Footer'
function App()
{
  return(
    <>
      <Layout>
        <Header/>
        <Certificaions/>
        <Projects/>
        <Doctors/>
        <Footer/>
      </Layout>
    </>
  );
}


export default App;