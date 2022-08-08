import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LaunchList from './components/launch-list';
import DetailView from './components/detail-view';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <span>SpaceX Demo</span>
        </header>

        <Switch>
          <Route exact path="/">
            <LaunchList />
          </Route>
          <Route exact path="/:id">
            <DetailView />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
