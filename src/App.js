import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import AppBar from './AppBar';
import GalleryContainer from './GalleryContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar />        
          <Switch>
            <Route path="/:subreddit" component={GalleryContainer} />
            <Redirect from="/" to="/kittens" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
