import React from 'react';
import Search from './search/Search';
import ShowList from './showList/ShowList';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { ShowProvider } from './common/ShowContext';

const App = () => {
  return <Container>
    <ShowProvider value={[]}>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about"><div>about</div></Route>
            <Route path="/users"><div>users</div></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/results"><ShowList data={null} /></Route>
            <Route path="/"><Redirect to="/search" /></Route>
          </Switch>
        </div>
      </Router>
    </ShowProvider>
  </Container>;
};

export default App;
