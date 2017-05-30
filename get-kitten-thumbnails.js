const fetch = require('isomorphic-fetch');
const _ = require('lodash');

const SUBREDDIT = 'kitten';

const getThumbnails = () => {
    return fetch(`https://www.reddit.com/r/${SUBREDDIT}/hot.json?raw_json=1&limit=24`)
        .then(response => response.json())
        .then(response => {
            return response.data.children
                .map(child => {
                    const resolutions = _.get(child, 'data.preview.images[0].resolutions', [])
                    return resolutions
                        .filter(resolution => resolution.width === 320)
                        .map(resolution => resolution.url)[0];
                })
                .filter(thumbnail => thumbnail !== undefined);
          })
        .then(thumbnails => JSON.stringify(thumbnails, null, 2));
};

getThumbnails().then(console.log);
