const json = require('./kitty.json');

const thumbnails = json.data.children.map(child => {
  // get the first image
  const image = child.data.preview.images[0];

  return image.resolutions
    .filter(resolution => resolution.width === 216)
    .map(resolution => resolution.url)[0];
});

console.log(JSON.stringify(thumbnails, null, 2));
