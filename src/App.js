import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from './Navigation';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Homepage from './Homepage';
import Blog from './Blog';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <div>
              About
            </div>
          </Route>
          <Route exact path="/projects">
            <div>
              Projects
            </div>
          </Route>
          <Route path="/blog">
            <div>
              <Blog/>
            </div>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
