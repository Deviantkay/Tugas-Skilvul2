function truncate_string(str, num) {
    if (str.length > num) {
        return str.slice(0, num);
    } else {
        return str;
    }
}

// Contoh penggunaan
console.log("Soal 2")
console.log(truncate_string("Terra Skilvul", 5));
console.log(truncate_string("coba", 2));