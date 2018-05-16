import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import getConfiguredStore from './configureStore'
// load bootstrap for reactstrap
import 'bootstrap/dist/css/bootstrap.css'
// load global scss
import 'assets/scss/style.scss'
// extend bluebird promise in dev mode
Promise.config({
  longStackTraces: process.env.NODE_ENV === 'development',
  warnings: process.env.NODE_ENV === 'development',
})

const store = getConfiguredStore()
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )

}
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {render(App)})
}

render(App)
