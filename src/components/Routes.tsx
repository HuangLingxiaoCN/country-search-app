import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CountryPage from '../pages/CountryPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={CountryPage} />
  </Switch>
)

export default Routes
