function text_truncate(str, length = 100, ending = '...') {
    if (str.length <= length) {
        return str;
    }
    else {
        return str.slice(0, length - ending.length) + ending;
    }
}

// Contoh penggunaan
//console.log(text_truncate('We are doing JS string exercises.')); // output: "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', -1)); // output: "We are doing JS ..."
//console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // output: "We are doing !!"
