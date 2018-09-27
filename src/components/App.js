import React from 'react';
import Home from './Home';
import TopNav from './TopNav';
import Results from './Results';
import Watch from './Watch';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <TopNav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/watch' component={Watch} />
      </Switch>
    </div>
  );
}

export default App;
