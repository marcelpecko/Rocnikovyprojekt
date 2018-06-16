import React from 'react'
import MyForm from '../Prihlasenie'
import {Route} from 'react-router-dom'
import HlavnaStranka from '../Hlavna_stranka'
import Registracia from '../Registracia'

const App = () => (
  <div>
    <Route exact path="/" component={MyForm} />
    <Route path="/hlavna" component={HlavnaStranka} />
    <Route path="/registracia" component={Registracia} />
  </div>
)

export default App
