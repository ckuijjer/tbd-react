import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import GalleryContainer from './GalleryContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:subreddit" component={GalleryContainer} />
          <Redirect from="/" to="/kittens" />
        </Switch>
      </Router>
    )
  }
}

export default App;
