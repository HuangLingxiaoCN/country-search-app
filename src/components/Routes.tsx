import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CountryPage from '../pages/CountryPage'
import Favorite from '../pages/Favorite'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={CountryPage} />
    <Route exact path="/favorite" component={Favorite} />
  </Switch>
)

export default Routes
