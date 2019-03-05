import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { CallbackContainer } from './modules/onboarding-views/CallbackContainer'
import { LoginContainer } from './modules/onboarding-views/LoginContainer'
import { HomePage } from './modules/home-views/HomePage'
import { getStore } from './Store'
import DevTools from 'mobx-react-devtools'

class App extends Component {
  store = getStore()

  render() {
    let loc = this.store.routing.location.pathname
    let isAuth = this.store.auth.isAuthenticated()
    console.log(`Location=${loc}, Auth=${isAuth}`)
    return (
      <div>
        <Switch>
          {!isAuth && <Route exact path="/" component={LoginContainer} />}
          {isAuth && <Route path="/" render={() => <HomePage />} />}
          <Route exact path="/auth/callback" component={CallbackContainer} />
          <Route render={() => <div> Sorry, this page does not exist. </div>} />
        </Switch>
        <DevTools />
      </div>
    )
  }
}

export default App
