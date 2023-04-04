function is_Blank(str) {
    return (!str || /^\s*$/.test(str));
}

// Contoh penggunaan
console.log(is_Blank(''));
console.log(is_Blank('apakah'));