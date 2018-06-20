import React from 'react'
import MyForm from '../Prihlasenie'
import {Route} from 'react-router-dom'
import HlavnaStranka from '../Hlavna_stranka'
import Registracia from '../Registracia'
import Stravnik from '../Nastavenie_profilu_stravnik'
import Pouzivatel from '../Nastavenie_profilu_pouzivatel'
import Vyber from '../Vyber_z_listka'

const App = () => (
  <div>
    <Route exact path="/" component={MyForm} />
    <Route path="/hlavna" component={HlavnaStranka} />
    <Route path="/registracia" component={Registracia} />
    <Route path="/stravnik" component={Stravnik} />
    <Route path="/pouzivatel" component={Pouzivatel} />
    <Route path="/vyber" component={Vyber} />
  </div>
)

export default App
