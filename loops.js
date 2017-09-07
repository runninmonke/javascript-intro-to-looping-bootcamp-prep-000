function forLoop(array) {
  for (i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    n--;
  }
}

function doWhileLoop (array) {
  do {
    array.pop();
  } while(array.length > 0 and maybeTrue());
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
