function isItNumeric(input) {
  // cek apakah input terdefinisi atau tidak
  if (typeof input === 'undefined' || input === null) {
    return false;
  }

  // cek apakah input merupakan angka atau string angka
  if (!isNaN(parseFloat(input)) && isFinite(input)) {
    return true;
  }

  return false;
}

console.log(isItNumeric(12));
console.log(isItNumeric('abcd'));
console.log(isItNumeric('12'));
console.log(isItNumeric(' '));
console.log(isItNumeric(1.20));
console.log(isItNumeric(-200));