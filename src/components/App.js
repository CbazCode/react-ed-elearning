import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export const App = () => {
  return (
    <Provider store = { store }>
      <h1>Prueba</h1>
    </Provider>
  )
}


