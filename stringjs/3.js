function datanama(fullname) {
    let nama = fullname.split(' ');
    let namadepan = nama[0];
    let namabelakang = nama[nama.length - 1];

    let inisialnama = namabelakang.charAt(0);
    //let inisialnama = namabelakang.slice(0,1)
    
    let result = namadepan + ' ' + inisialnama + '.';
    
    return result;
}

// Contoh penggunaan
console.log(datanama("David Winalda"));