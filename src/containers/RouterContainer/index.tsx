import * as React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../../components/Home';
import NotFound from '../../components/NotFound';

const RouterContainer: React.StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route component={NotFound}/>
  </Switch>
);

export default RouterContainer;