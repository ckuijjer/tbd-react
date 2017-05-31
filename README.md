# tbd-react

A simple image gallery

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

## To start

* `yarn` - install dependencies
* `yarn start` - start the webpack dev server

## Notes

### An example /r/kitten thumbnail 
https://i.redditmedia.com/L7FHXRkQWjjGz9pN3ONFtUmnujnhVUkz-i4LVgy70EE.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=320&s=2a83bc67d486cee2919553a545f94dd4

### The runkit to get kitten thumbnails
https://runkit.com/ckuijjer/kitten-thumbnails

### The endpoint to get kitten thumbnails
https://ckuijjer.runkit.io/kitten-thumbnails/branches/master

### The endpoint to get kitten thumbnails and ids
https://runkit.com/ckuijjer/kitten-thumbnails-and-id

### The endpoint to get kitten thumbnails and ids
https://ckuijjer.runkit.io/kitten-thumbnails-and-id/branches/master

### The /r/kitten JSON api endpoint used
https://www.reddit.com/r/kitten/hot.json?raw_json=1&limit=24

## Code snippets

App styling
```
const styles = {
  container: {
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    maxWidth: 768,
    padding: 16,
    boxSizing: 'border-box',
  },
}
```

ImageGrid styling
```
const style = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: 16,
}

```

FullScreen image styling
```
const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    maxWidth: 768,
    padding: 16,
    boxSizing: 'border-box',
  },
};
```