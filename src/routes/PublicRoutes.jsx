import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({ component: Component, ...rest}) => {
  //Componente funciona igual que render
  const userLogged = true;
  if( userLogged ) {
    return <Redirect to = "/"/>
  }
  return (
    <Route {...rest} render = { Component }/>
  )
}