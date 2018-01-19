import React from 'react'
import { connect } from 'react-redux'
import MyForm from '../Prihlasenie'
import Marcel from '../Nastavenie_profilu_stravnik'

const App = () => (
  <div>
    <MyForm />
  </div>
)

export default connect(
  (state) => ({

  }),
  {

  },
)(App)
