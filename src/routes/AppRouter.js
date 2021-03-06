import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Header } from '../components/Organisms/Header.js'
import { Classes } from '../components/pages/Classes.js'
import { Course } from '../components/pages/Course.js'
import { Courses } from '../components/pages/Courses.js'
import { Home } from '../components/pages/Home.js'
import { Login } from '../components/pages/Login.js'
import { Page404 } from '../components/pages/Page404.js'
import { Register } from '../components/pages/Register.js'
import { Specialities } from '../components/pages/Specialities.js'
import { Speciality } from '../components/pages/Speciality.js'
import { Teachers } from '../components/pages/Teachers.js'
import ScrollToTop from '../helpers/ScrollToTop.js'

import { PrivateRoutes } from './PrivateRoutes.js'
import { PublicRoutes } from './PublicRoutes.js'


export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <div>
        <Switch>
          <PrivateRoutes exact path = "/especialidades" component = {Specialities}/>
          <PrivateRoutes exact path = "/especialidades/:id" component = {Speciality}/>
          <PrivateRoutes exact path = "/cursos" component = {Courses}/>
          <PrivateRoutes exact path = "/cursos/:id" component = {Course}/>
          <PrivateRoutes exact path = "/profesores" component = {Teachers}/>
          <PrivateRoutes exact path = "/clase/:id" component = {Classes}/>
          <PrivateRoutes exact path = "/" component = {Home}/>

          <PublicRoutes path="/login" exact component = {Login}/>
          <PublicRoutes path="/register" exact component = {Register}/>

          <Route component = {Page404}/>
          
        </Switch>
      </div>
    </Router>
  )
}
