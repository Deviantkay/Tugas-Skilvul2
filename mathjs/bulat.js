function roundUpToFive(number) {
  // cek apakah number bukan bilangan bulat
  if (!Number.isInteger(number)) {
    throw new Error('Input harus bilangan bulat');
  }

  // cek apakah number kurang dari 0
  if (number < 0) {
    throw new Error('Input harus bernilai positif');
  }

  // hitung sisa pembagian number dengan 5
  const remainder = number % 5;

  // jika sisa pembagian == 0, kembalikan number
  if (remainder === 0) {
    return number;
  }

  // jika sisa pembagian > 0, hitung selisih dengan 5
  const difference = 5 - remainder;

  // tambahkan selisih ke number dan kembalikan hasilnya
  return number + difference;
}

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));