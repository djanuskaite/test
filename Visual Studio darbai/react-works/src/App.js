import React from 'react'
import Todo from './Todo'
import Joke from './Joke'
import Cats from './Cats'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='nav justify-content-center mt-5'>
            <li className='nav-link'>
              <Link to="/"><h3>Home</h3></Link>
            </li>
            <li className='nav-link'>
              <Link to="/cats"><h3>Cats</h3></Link>
            </li>
            <li className='nav-link'>
              <Link to="/joke"><h3>Joke</h3></Link>
            </li>
            <li className='nav-link'>
              <Link to="/todo"><h3>Task List</h3></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/joke">
            <Joke />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
