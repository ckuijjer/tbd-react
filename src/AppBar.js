import React from 'react';
import { Link } from 'react-router-dom'

const SUBREDDITS = [
  'aww',
  'kittens',
  'kitty',
  'catloaf',
  'babyelephantgifs'
];

const AppBar = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      backgroundColor: '#333',
      color: '#eee',
      flex: 1,
      maxWidth: 768,
      padding: 16,
      boxSizing: 'border-box'
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        { SUBREDDITS.map(subreddit => (
          <Link to={`/${subreddit}`}>/r/{subreddit}</Link>
        ))}
      </div>
    </div>
  )

}

export default AppBar;
