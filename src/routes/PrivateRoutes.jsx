import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({ component: Component, ...rest}) => {
  //Componente funciona igual que render
  const userLogged = true;
  if( !userLogged ) {
    return <Redirect to = "/login"/>
  }
  return <Route {...rest} render = { Component }/>
  
}
