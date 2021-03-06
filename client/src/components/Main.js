import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Dashboard from './Dashboard'

// Protected Route 
const checkAuth = () => {
  const exp = localStorage.getItem('exp');
  if (!exp) {
    return false;
  }
  try {
    // { exp: 12903819203 }
    if (exp < new Date().getTime()) {
      return false;
    }

  } catch(err) {
    return false;
  }
  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/login' render={props => <Login {...props} />}/>
      <AuthRoute exact path='/dashboard' component={Dashboard} />
      <AuthRoute exact path="/" component={Dashboard} />
      <Route path="*" component={() => "404 NOT FOUND"}/>
    </Switch>
  </main>
)

export default Main;