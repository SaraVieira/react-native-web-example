/* @flow */

import React from 'react'
import { AppRegistry } from 'react-native'

import { AppContainer } from 'react-hot-loader'

import App from './App'

const renderApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
)

AppRegistry.registerComponent('ReactUniversal', () => renderApp)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept()

  const renderHotApp = () => (
    <AppContainer>
      <App />
    </AppContainer>
  )

  // App registration and rendering
  AppRegistry.registerComponent('ReactUniversal', () => App)
}

AppRegistry.runApplication('ReactUniversal', {
  rootTag: document.getElementById('root')
})
