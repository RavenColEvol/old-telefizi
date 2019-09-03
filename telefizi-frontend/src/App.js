import React from 'react'
import Layout from './layout/Layout'
import Header from './containers/Header/Header'
import Certificaions from './containers/Certifications/Certifications'
import Projects from './containers/Portfolio/Portfolio'
import Doctors from './containers/Doctors/Doctors'
import Footer from './containers/Footer/Footer'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './containers/Login/Login'
import f0f from './components/404/404'

const Main = function(){
  return(
    <>
        <Header/>
        <Certificaions/>
        <Projects/>
        <Doctors/>
        <Footer/>
    </>
  )
}
function App()
{
  return(
    <>
      <Layout>
          <Router>
            <Route exact path='/' component={Main}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route component={f0f}></Route>
          </Router>
      </Layout>
    </>
  );
}


export default App;