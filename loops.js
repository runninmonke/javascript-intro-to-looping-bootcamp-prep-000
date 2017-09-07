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
  return 'done';
}
