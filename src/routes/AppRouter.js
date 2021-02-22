import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Header } from '../components/Organisms/Header'
import { Classes } from '../components/pages/Classes'
import { Course } from '../components/pages/Course'
import { Courses } from '../components/pages/Courses'
import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { Register } from '../components/pages/Register'
import { Specialities } from '../components/pages/Specialities'
import { Speciality } from '../components/pages/Speciality'
import { Teachers } from '../components/pages/Teachers'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


export const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
          <PrivateRoutes path = "/especialidades" component = {Specialities}/>
          <PrivateRoutes path = "/especialidades/:id" component = {Speciality}/>
          <PrivateRoutes path = "/cursos" component = {Courses}/>
          <PrivateRoutes path = "/cursos/:id" component = {Course}/>
          <PrivateRoutes path = "/profesores" component = {Teachers}/>
          <PrivateRoutes path = "/clase/:id" component = {Classes}/>
          <PrivateRoutes exact path = "/" component = {Home}/>

          <PublicRoutes path="/login" exact component = {Login}/>
          <PublicRoutes path="/register" exact component = {Register}/>

          <Route component = {Page404}/>
          
        </Switch>
      </div>
    </Router>
  )
}
