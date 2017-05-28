import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'

import GalleryContainer from './GalleryContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:subreddit" component={GalleryContainer} />
          <Redirect from="/" to="/kitten" />
        </Switch>
      </Router>
    )
  }
}

export default App;
