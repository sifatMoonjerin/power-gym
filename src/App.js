import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/pricing' exact component={Pricing}/>
      </Switch>
    </Router>
  );
}

export default App;
