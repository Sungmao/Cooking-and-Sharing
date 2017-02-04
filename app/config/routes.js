import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import InputPage from '../pages/InputPage'
import Display from '../pages/Display'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

    	<Route path="inputpage" component={InputPage}/>
    	<Route path="Display" component={Display}/>

    	<IndexRoute component={Welcome} />
    </Route>
  </Router>
);
