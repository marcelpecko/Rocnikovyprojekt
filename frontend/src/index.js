import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import getConfiguredStore from './configureStore'

const store = getConfiguredStore()
/*const render = (Component) => {
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

render(App)*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
