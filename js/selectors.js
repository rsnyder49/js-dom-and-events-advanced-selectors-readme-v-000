// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  let images = $('image');
  return images[images.length - 1];
}