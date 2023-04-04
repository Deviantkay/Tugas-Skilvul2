function kapital(str) {
    var hurufsatu = str.charAt(0).toUpperCase();
    var sisa = str.slice(1);
    var result = hurufsatu + sisa;
    return result;
}

console.log(kapital('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));
//console.log(kapital(1))
//console.log(kapital('1'))
