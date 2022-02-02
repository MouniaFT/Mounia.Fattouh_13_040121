import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.scss'

//Redux
import { store } from './app/store'
import { Provider } from 'react-redux'

//Adding the Provider to connect the application to the store.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
