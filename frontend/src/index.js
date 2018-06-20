import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import getConfiguredStore from './configureStore'
import {Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {history} from './history'

const store = getConfiguredStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
