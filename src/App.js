import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import allQuotes from "./containers/allQuotes";
import Nav from './components/Nav';
import randomQuotes from './containers/randomQuotes';
import './App.css';


function App() {
  return (
    <>
      <Nav>
        <Link to='/'>All Quotes</Link>
        <Link to='/random'>Random Quote</Link>
      </Nav>


      <Switch>
        <Route path='/' exact component={allQuotes} />
        <Route path='/random' component={randomQuotes} />
      </Switch>

    </>
  );
}

export default App;
