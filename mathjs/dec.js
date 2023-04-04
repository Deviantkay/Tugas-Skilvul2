function chooseDecimals(n, d) {
  if (!n) {
    return 0;
  }

  if (!d) {
    return n.toFixed(0);
  }

  return n.toFixed(d);
}
console.log(chooseDecimals(2.100212, 2));

console.log(chooseDecimals(2.100212, 3));

console.log(chooseDecimals(2100, 2));