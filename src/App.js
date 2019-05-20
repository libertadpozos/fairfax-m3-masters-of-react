import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardGenerator from './components/CardGenerator';
import Landing from './components/Landing';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/card-generator' component={CardGenerator} />
      </Switch>
    );
  }
}

export default App;
