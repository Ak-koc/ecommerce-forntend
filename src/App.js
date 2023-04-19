import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import RouterDefinition from './router/app/RouterDefinition'
export default class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
      <header>
        <RouterDefinition/>
      </header>
      </Provider>
    </div>
       
    )
  }
}



