import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Containers/Home';
import Details from './Containers/Details';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
