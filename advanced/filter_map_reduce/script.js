const angka = [-1,8,6,7,-4,2,3,9,-2];
// mencari angka >= 3
//  for
// const newAngka = [];
// for( let i = 0; i < angka.length; i++ ) {
//     if( angka[i] >= 3 ) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);
// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan semua element
// 0 +-1 + 8 + 6 + 7 + -4 + 2 + 3 + 9 + -2
// const newAngka = angka.reduce((acc, cur) => acc + cur, 2);
// 0 angka default
// console.log(newAngka)




// method chaining
// const angka = [-1,8,6,7,-4,2,3,9,-2];
const hasil = angka.filter(a => a > 5) //6,7,8,9
    .map(a => a * 3) // 18,21,24,27
    .reduce((acc, cur) => acc + cur); // 90

console.log(hasil);