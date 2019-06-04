import React from 'react'
import MyForm from '../Prihlasenie'
import {Route} from 'react-router-dom'
import HlavnaStranka from '../Hlavna_stranka'
import Registracia from '../Registracia'
import Stravnik from '../Nastavenie_profilu_stravnik'
import Pouzivatel from '../Nastavenie_profilu_pouzivatel'
import Vyber from '../Vyber_z_listka'
import Jedalen from '../Jedalen_uvod'
import MazaniePouzivatelov from '../Jedalen_mazanie_pouzivatelov'
import MazanieStravnikov from '../Jedalen_mazanie_stravnikov'
import NastavenieListka from '../Jedalen_nastavenie_listka'
import MesacnyPrehladJedalen from '../Jedalen_mesacny_prehlad'
import Zobrazenie from '../Jedalen_nastavenie_listka/Zobrazenie'
import MesacnyPrehladStravnik from '../Mesacny_prehlad_stravnik'

const App = () => (
  <div>
    <Route exact path="/" component={MyForm} />
    <Route path="/hlavna" component={HlavnaStranka} />
    <Route path="/registracia" component={Registracia} />
    <Route path="/stravnik" component={Stravnik} />
    <Route path="/pouzivatel" component={Pouzivatel} />
    <Route path="/vyber" component={Vyber} />
    <Route path="/jedalen" component={Jedalen} />
    <Route path="/mazanie_pouzivatelov" component={MazaniePouzivatelov} />
    <Route path="/mazanie_stravnikov" component={MazanieStravnikov} />
    <Route path="/nastavenie_listka" component={NastavenieListka} />
    <Route path="/mesacny_prehlad_stravnik" component={MesacnyPrehladStravnik} />
    <Route path="/mesacny_prehlad_jedalen" component={MesacnyPrehladJedalen} />
    <Route path="/zobrazenie" component={Zobrazenie} />
  </div>
)

export default App
