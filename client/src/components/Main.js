import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import Dashboard from './Dashboard'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route path="*" component={() => "404 NOT FOUND"}/>
    </Switch>
  </main>
)

export default Main;